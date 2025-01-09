"use client"; // Mark as Client Component

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const PlayButton = () => {
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

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
      };

      utteranceRef.current.onend = () => {
        console.log(performance.now());
        console.log('Speech synthesis has ended!');
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
    <button onClick={handlePlay} className="play-button" id="play-button">
      <Image 
        src="/pause.png"
        width={35}
        height={35}
        alt="Play/Pause"
        layout="responsive"
      />
    </button>
  );
};

export default PlayButton;