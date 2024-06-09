// Define the types for the elements
const secondHand: HTMLElement | null = document.querySelector(".second-hand");
const minsHand: HTMLElement | null = document.querySelector(".min-hand");
const hourHand: HTMLElement | null = document.querySelector(".hour-hand");

function setDate(): void {
  const now: Date = new Date();

  const seconds: number = now.getSeconds();
  const secondsDegrees: number = (seconds / 60) * 360 + 90;
  if (secondHand) {
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  const mins: number = now.getMinutes();
  const minsDegrees: number = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  if (minsHand) {
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  }

  const hour: number = now.getHours();
  const hourDegrees: number = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  if (hourHand) {
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
}

setInterval(setDate, 1000);

setDate();

//The TypeScript version ensures
// type safety by explicitly typing variables and adding checks for null to avoid runtime errors.
