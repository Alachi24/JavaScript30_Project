const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

// The "input" event works for both and made the code more shorter but still efficient.
inputs.forEach((input) => input.addEventListener("input", handleUpdate));
