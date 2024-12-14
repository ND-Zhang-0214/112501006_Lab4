// Select all the drum buttons
var drums = document.querySelectorAll('.drum');

// Function to play sound and add visual feedback
function playSound(event) {
  var audioKey = this.textContent;  // Get the character of the button (e.g., 'w', 'a', 's', etc.)
  var audioFile;

  // Map keys to audio file names
  switch(audioKey) {
    case 'w':
      audioFile = 'crash.mp3';
      break;
    case 'a':
      audioFile = 'kick-bass.mp3';
      break;
    case 's':
      audioFile = 'snare.mp3';
      break;
    case 'd':
      audioFile = 'tom-1.mp3';
      break;
    case 'j':
      audioFile = 'tom-2.mp3';
      break;
    case 'k':
      audioFile = 'tom-3.mp3';
      break;
    case 'l':
      audioFile = 'tom-4.mp3';
      break;
    default:
      return;
  }

  // Play the sound
  var audio = new Audio(audioFile);
  audio.play();

  // Add visual feedback
  this.classList.add('pressed');
  setTimeout(() => {
    this.classList.remove('pressed');
  }, 100); // Remove 'pressed' class after 100ms
}

// Add event listeners for mouse click
drums.forEach(drum => {
  drum.addEventListener('click', playSound);
});

// Add event listener for keyboard press
window.addEventListener('keydown', (event) => {
  var keyPressed = event.key;
  var drumButton = document.querySelector(`.${keyPressed}`);
  if (drumButton) {
    playSound.call(drumButton); // Use call to bind this context to the clicked button
  }
});
