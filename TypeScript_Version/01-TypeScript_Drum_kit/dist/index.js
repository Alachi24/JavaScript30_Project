"use strict";
function playSound(e) {
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function removeTransition(e) {
    if (e.propertyName !== "transform")
        return;
    const key = e.target;
    key.classList.remove("playing");
}
const keys = Array.from(document.querySelectorAll(".key"));
//removeTransition is cast as EventListener when added to addEventListener to ensure type compatibility.
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
