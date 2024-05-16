function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  // Select the audio element corresponding to the pressed key
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  // Select the key element corresponding to the pressed key
  const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
  // If no audio element is found for the pressed key, exit the function
  if (!audio) return;

  // Add the 'playing' class to the key element to trigger CSS animation
  key.classList.add("playing");
  // Rewind the audio to the start and play it
  audio.currentTime = 0;
  audio.play();
}

// Select all elements with the class 'key' and convert the NodeList to an array
const keys = Array.from(document.querySelectorAll(".key"));

// Add a 'transitionend' event listener to each key element in the array
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Add a 'keydown' event listener to the window object to trigger the playSound function
window.addEventListener("keydown", playSound);
