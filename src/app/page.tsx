// src/app/page.tsx
"use client";

import React, { useRef, useEffect, useCallback } from "react";

// Configuration constants
const DAMPING = 0.96;
const RIPPLE_STRENGTH = 3.66;
const HOVER_RIPPLE_STRENGTH = 0.33; // Lighter ripple for hover effect
const BASE_INTENSITY = 0.15;
const WAVE_FREQUENCY = 7;
const WAVE_AMPLIFICATION = 1.8;
const DISTURB_RADIUS = 3;
const HOVER_UPDATE_INTERVAL = 40; // Milliseconds between hover ripple updates

// Helper function to create and initialize a 2D buffer
const createBuffer = (width: number, height: number): number[][] => {
  return Array.from({ length: width }, () =>
    Array.from({ length: height }, () => 0)
  );
};

export default function Home() {
  // Canvas refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Simulation refs
  const rippleBuffer1 = useRef<number[][] | null>(null);
  const rippleBuffer2 = useRef<number[][] | null>(null);
  const useFirstBuffer = useRef<boolean>(true);

  // Rendering refs
  const imageDataRef = useRef<ImageData | null>(null);
  const pixelsRef = useRef<Uint8ClampedArray | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Interaction refs
  const isInteractingRef = useRef<boolean>(false);
  const lastHoverPos = useRef<{ x: number; y: number } | null>(null);
  const lastHoverTime = useRef<number>(0);

  // Size refs
  const widthRef = useRef<number>(0);
  const heightRef = useRef<number>(0);

  // Update canvas size to match viewport
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Only resize if dimensions changed
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      widthRef.current = width;
      heightRef.current = height;

      // Reinitialize buffers with new size
      rippleBuffer1.current = createBuffer(width, height);
      rippleBuffer2.current = createBuffer(width, height);

      // Reinitialize image data for rendering
      const ctx = ctxRef.current;
      if (ctx) {
        imageDataRef.current = ctx.createImageData(width, height);
        pixelsRef.current = imageDataRef.current.data;
      }
    }
  }, []);

  // Update ripple simulation
  const updateRipple = useCallback(() => {
    if (!rippleBuffer1.current || !rippleBuffer2.current) return;

    const width = widthRef.current;
    const height = heightRef.current;
    const src = useFirstBuffer.current
      ? rippleBuffer1.current
      : rippleBuffer2.current;
    const dst = useFirstBuffer.current
      ? rippleBuffer2.current
      : rippleBuffer1.current;

    for (let x = 1; x < width - 1; x++) {
      for (let y = 1; y < height - 1; y++) {
        const avgNeighbors =
          (src[x - 1][y] + src[x + 1][y] + src[x][y - 1] + src[x][y + 1]) / 2;

        let newValue = avgNeighbors - dst[x][y];
        newValue *= DAMPING;
        dst[x][y] = newValue;
      }
    }

    useFirstBuffer.current = !useFirstBuffer.current;
  }, []);

  // Draw the ripple effect
  const drawRippleEffect = useCallback(() => {
    if (!pixelsRef.current || !imageDataRef.current || !ctxRef.current) return;
    if (!rippleBuffer1.current || !rippleBuffer2.current) return;

    const width = widthRef.current;
    const height = heightRef.current;
    const buffer = useFirstBuffer.current
      ? rippleBuffer1.current
      : rippleBuffer2.current;
    const pixels = pixelsRef.current;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const value = buffer[x][y];

        let ripple = Math.sin(value * Math.PI * WAVE_FREQUENCY);
        ripple = (ripple * 0.5 + 0.5) * WAVE_AMPLIFICATION;
        ripple = Math.max(0, Math.min(ripple, 1));

        const alpha = BASE_INTENSITY + ripple * (1 - BASE_INTENSITY);
        const alphaByte = Math.floor(alpha * 255);

        const index = (y * width + x) * 4;
        pixels[index] = 255; // R
        pixels[index + 1] = 255; // G
        pixels[index + 2] = 255; // B
        pixels[index + 3] = alphaByte; // A
      }
    }

    ctxRef.current.putImageData(imageDataRef.current, 0, 0);
  }, []);

  // Disturb the water at specific coordinates
  const disturb = useCallback((x: number, y: number, strength: number) => {
    const buffer = useFirstBuffer.current
      ? rippleBuffer1.current
      : rippleBuffer2.current;
    if (!buffer) return;

    const gridX = Math.floor(x);
    const gridY = Math.floor(y);
    const maxDist = DISTURB_RADIUS;

    for (let dx = -maxDist; dx <= maxDist; dx++) {
      for (let dy = -maxDist; dy <= maxDist; dy++) {
        const nx = gridX + dx;
        const ny = gridY + dy;

        if (
          nx > 0 &&
          nx < widthRef.current - 1 &&
          ny > 0 &&
          ny < heightRef.current - 1
        ) {
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const falloff = 1 - Math.max(0, Math.min(dist / maxDist, 1));
            const waveStrength = strength * (falloff * falloff);
            buffer[nx][ny] += waveStrength;
          }
        }
      }
    }
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    updateRipple();
    drawRippleEffect();
    animationFrameId.current = requestAnimationFrame(animate);
  }, [updateRipple, drawRippleEffect]);

  // Get canvas coordinates from DOM event
  const getCanvasCoordinates = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return null;

      const rect = canvas.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    },
    []
  );

  // Event handlers for mouse/touch
  const handleInteractionStart = useCallback(
    (event: MouseEvent | TouchEvent) => {
      isInteractingRef.current = true;

      if (event instanceof TouchEvent) {
        event.preventDefault();
        const touch = event.touches[0];
        if (touch) {
          const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
          if (coords) {
            disturb(coords.x, coords.y, RIPPLE_STRENGTH);
          }
        }
      } else {
        const coords = getCanvasCoordinates(event.clientX, event.clientY);
        if (coords) {
          disturb(coords.x, coords.y, RIPPLE_STRENGTH);
        }
      }
    },
    [getCanvasCoordinates, disturb]
  );

  const handleInteractionMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      // Update last hover position for all move events
      if (event instanceof TouchEvent) {
        if (event.touches.length > 0) {
          const touch = event.touches[0];
          const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
          if (coords) {
            lastHoverPos.current = coords;
          }
        }
      } else {
        const coords = getCanvasCoordinates(event.clientX, event.clientY);
        if (coords) {
          lastHoverPos.current = coords;
        }
      }

      // Only create ripples if actively dragging (mousedown/touchstart)
      if (!isInteractingRef.current) return;

      if (event instanceof TouchEvent) {
        event.preventDefault();
        const touch = event.touches[0];
        if (touch) {
          const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
          if (coords) {
            disturb(coords.x, coords.y, RIPPLE_STRENGTH * 0.6);
          }
        }
      } else {
        const coords = getCanvasCoordinates(event.clientX, event.clientY);
        if (coords) {
          disturb(coords.x, coords.y, RIPPLE_STRENGTH * 0.6);
        }
      }
    },
    [getCanvasCoordinates, disturb]
  );

  const handleInteractionEnd = useCallback(() => {
    isInteractingRef.current = false;
  }, []);

  // Handle mouse hover effect (separate from drag)
  const handleHover = useCallback(
    (event: MouseEvent) => {
      // Skip if we're already interacting (dragging)
      if (isInteractingRef.current) return;

      const now = Date.now();
      // Throttle hover ripples to avoid overwhelming the simulation
      if (now - lastHoverTime.current < HOVER_UPDATE_INTERVAL) return;

      const coords = getCanvasCoordinates(event.clientX, event.clientY);
      if (coords) {
        lastHoverPos.current = coords;
        disturb(coords.x, coords.y, HOVER_RIPPLE_STRENGTH);
        lastHoverTime.current = now;
      }
    },
    [getCanvasCoordinates, disturb]
  );

  // Initialize and clean up
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) {
      console.error("Canvas context could not be obtained.");
      return;
    }

    // Store context
    ctxRef.current = ctx;

    // Set initial canvas size and initialize buffers
    updateCanvasSize();

    // Listen for window resize
    window.addEventListener("resize", updateCanvasSize);

    // Add event listeners for mouse/touch
    const options = { passive: false };
    canvas.addEventListener("mousedown", handleInteractionStart);
    canvas.addEventListener("mousemove", handleInteractionMove);
    canvas.addEventListener("mouseup", handleInteractionEnd);
    canvas.addEventListener("mouseleave", handleInteractionEnd);
    canvas.addEventListener("touchstart", handleInteractionStart, options);
    canvas.addEventListener("touchmove", handleInteractionMove, options);
    canvas.addEventListener("touchend", handleInteractionEnd);
    canvas.addEventListener("touchcancel", handleInteractionEnd);

    // Add hover effect handler
    canvas.addEventListener("mousemove", handleHover);

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      // Stop animation
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      // Remove event listeners
      window.removeEventListener("resize", updateCanvasSize);
      canvas.removeEventListener("mousedown", handleInteractionStart);
      canvas.removeEventListener("mousemove", handleInteractionMove);
      canvas.removeEventListener("mouseup", handleInteractionEnd);
      canvas.removeEventListener("mouseleave", handleInteractionEnd);
      canvas.removeEventListener("touchstart", handleInteractionStart);
      canvas.removeEventListener("touchmove", handleInteractionMove);
      canvas.removeEventListener("touchend", handleInteractionEnd);
      canvas.removeEventListener("touchcancel", handleInteractionEnd);
      canvas.removeEventListener("mousemove", handleHover);
    };
  }, [
    animate,
    updateCanvasSize,
    handleInteractionStart,
    handleInteractionMove,
    handleInteractionEnd,
    handleHover,
  ]);

  // Render full-page canvas
  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        cursor: "crosshair",
      }}
    />
  );
}
