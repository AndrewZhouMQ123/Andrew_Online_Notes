const playButton = document.getElementById("play-button") as HTMLButtonElement;
// Find the parent div of the play button
const parentDiv = playButton.closest('div');

// Use the text content from the parent div
const pageText = parentDiv?.textContent?.trim();

const utterance = new SpeechSynthesisUtterance(pageText?.valueOf());

const synth = window.speechSynthesis;
utterance.lang = "en-US";
utterance.rate = 0.95;
utterance.volume = 1;

playButton.addEventListener('click', () => {
  if (!synth.speaking && !synth.paused) {
    synth.speak(utterance);
  } else if (synth.paused) {
    synth.resume();
  } else {
    synth.pause();
  }
});

utterance.onstart = () => {
  console.log(performance.now());
  console.log('Speech synthesis has started!');
};


utterance.onend = () => {
  synth.cancel();
  console.log(performance.now());
  console.log('Speech synthesis has ended!');
};