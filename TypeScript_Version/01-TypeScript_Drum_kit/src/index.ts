function playSound(e: KeyboardEvent): void {
  const keyCode = e.keyCode;
  const audio = document.querySelector(
    `audio[data-key="${keyCode}"]`
  ) as HTMLAudioElement;
  const key = document.querySelector(
    `.key[data-key="${keyCode}"]`
  ) as HTMLElement;
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e: TransitionEvent): void {
  if (e.propertyName !== "transform") return;
  const key = e.target as HTMLElement;
  key.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));

//removeTransition is cast as EventListener when added to addEventListener to ensure type compatibility.
keys.forEach((key) =>
  key.addEventListener("transitionend", removeTransition as EventListener)
);
window.addEventListener("keydown", playSound);
