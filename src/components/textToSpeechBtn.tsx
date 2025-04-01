"use client";
import React, { useState, useRef } from "react";

interface PlayButtonProps {
  text: string; // The text to convert to speech
}

const PlayButton = ({ text }: PlayButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = async () => {
    try {
      if (isPlaying && audioRef.current) {
        // Pause the audio if it's already playing
        audioRef.current.pause();
        setIsPlaying(false);
        return;
      }

      let ssmlText = `<speak>`;

      ssmlText += text
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
        .replace(/\n/g, "<break time='500ms'/>") // Add a pause after each newline
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
