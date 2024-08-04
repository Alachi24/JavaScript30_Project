//Get all elements with the class "panel"
const panels = document.querySelectorAll<HTMLDivElement>(".panel");

//Function to toggle the "open" class
function toggleOpen(this: HTMLDivElement) {
  console.log("Hello");
  this.classList.toggle("open");
}

// Function to toggle the "open-active" class based on transition end event
function toggleActive(this: HTMLDivElement, e: TransitionEvent) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

// Add event listeners for click and transitionend events
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
