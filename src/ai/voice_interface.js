 // voice_interface.js
 // Optional voice input/output for accessibility

 export function speak(message) {
     const synth = window.speechSynthesis;
     synth.speak(new SpeechSynthesisUtterance(message));
 }
