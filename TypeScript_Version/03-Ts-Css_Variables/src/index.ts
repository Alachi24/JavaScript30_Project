//select all input elements inside the controls class
const inputs = document.querySelectorAll<HTMLInputElement>(".controls input");

//Function to handle updating CSS Variables
function handleUpdate(this: HTMLInputElement): void {
  //Get the data-sizing attribute if it exists, or use an empty string
  const suffix = this.dataset.sizing || "";
  // Set the CSS Variables to the new value
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// Add an event listener to each input element to call handleUpdate on input event
inputs.forEach((input) => {
  input.addEventListener("input", handleUpdate);
});
