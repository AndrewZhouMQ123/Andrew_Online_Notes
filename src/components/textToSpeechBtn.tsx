"use client";
import React, { useState, useRef } from "react";

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = async () => {
    try {
      const pageWrapElement = document.querySelector(".page-wrap");
      if (!pageWrapElement) {
        console.error("No element with class 'page-wrap' found.");
        return;
      }

      // ignore text in <button>
      const getFilteredText = (element: Element, excludeSelector: string) => {
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: (node) =>
              node.parentElement?.matches(excludeSelector)
                ? NodeFilter.FILTER_REJECT
                : NodeFilter.FILTER_ACCEPT,
          }
        );

        let text = "";
        while (walker.nextNode()) {
          text += walker.currentNode.nodeValue + " ";
        }
        return text.trim();
      };

      const pageText = getFilteredText(pageWrapElement, ".button-container");
      if (!pageText) {
        console.error("No text found in the page-wrap element.");
        return;
      }

      const textWithoutHTML = pageText
        .replace(/<\/?[^>]+(>|$)/g, "<break time='200ms'/>")
        .trim();

      let ssmlText = `<speak>`;

      ssmlText += textWithoutHTML
        .replace(/([.])\s*/g, (match, punctuation) => {
          // Add a longer pause after a period (e.g., 1 second)
          return `${punctuation}<break time="400ms"/>`;
        })
        .replace(/([,])\s*/g, (match, punctuation) => {
          // Add a short pause after a comma (e.g., 300ms)
          return `${punctuation}<break time="200ms"/>`;
        })
        .replace(/([!?])\s*/g, (match, punctuation) => {
          // Add a medium pause after exclamation mark or question mark (e.g., 500ms)
          return `${punctuation}<break time="400ms"/>`;
        })
        .trim();

      ssmlText += `</speak>`;

      const response = await fetch("/api/synthesize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Text: ssmlText }),
      });

      if (!response.ok) throw new Error("Audio generation failed");

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }

      audioRef.current = new Audio(audioUrl);

      // Set up audio event handlers
      audioRef.current.onplay = () => setIsPlaying(true);
      audioRef.current.onpause = () => setIsPlaying(false);
      audioRef.current.onended = () => setIsPlaying(false);

      await audioRef.current.play();
    } catch (error) {
      console.error("Playback error:", error);
      alert("Error playing audio");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="button-container">
      <button
        onClick={handlePlay}
        disabled={isLoading}
        className={`play-button ${isPlaying ? "is-playing" : ""}`}
        aria-label={isPlaying ? "Pause speech" : "Play speech"}
        id="play-button"
      ></button>
      Text to Speech
    </div>
  );
};

export default PlayButton;
