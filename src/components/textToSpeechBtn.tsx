  "use client";
import React, { useEffect, useRef, useState } from 'react';

const PlayButton = () => {
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isPaused, setIsPaused] = useState(false); // State to track play/pause

  useEffect(() => {
    // Initialize speech synthesis
    synthRef.current = window.speechSynthesis;

    // Cleanup on unmount
    return () => {
      if (synthRef.current?.speaking || synthRef.current?.paused) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const handlePlay = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget; // Get the button element
    const parentDiv = button.closest('div'); // Find the nearest parent div

    if (!parentDiv) {
      console.error('No parent div found.');
      return;
    }

    const pageText = parentDiv.textContent?.trim();

    if (!pageText) {
      console.error('No text found in the parent div.');
      return;
    }

    // Create a new utterance if it doesn't exist
    if (!utteranceRef.current) {
      utteranceRef.current = new SpeechSynthesisUtterance(pageText);
      utteranceRef.current.lang = 'en-US';
      utteranceRef.current.rate = 0.95;
      utteranceRef.current.volume = 1;

      utteranceRef.current.onstart = () => {
        console.log(performance.now());
        console.log('Speech synthesis has started!');
        setIsPaused(false); // Set to play state
      };

      utteranceRef.current.onend = () => {
        console.log(performance.now());
        console.log('Speech synthesis has ended!');
        setIsPaused(false); // Reset to play state
      };

      utteranceRef.current.onpause = () => {
        console.log('Speech synthesis paused!');
        setIsPaused(true); // Set to pause state
      };

      utteranceRef.current.onresume = () => {
        console.log('Speech synthesis resumed!');
        setIsPaused(false); // Set to play state
      };
    }

    const synth = synthRef.current as SpeechSynthesis;

    if (!synth.speaking && !synth.paused) {
      synth.speak(utteranceRef.current);
    } else if (synth.paused) {
      synth.resume();
    } else {
      synth.pause();
    }
  };

  return (
    <button
      onClick={handlePlay}
      className={`play-button ${isPaused ? 'is-paused' : ''}`}
      id="play-button"
    ></button>
  );
};

export default PlayButton;