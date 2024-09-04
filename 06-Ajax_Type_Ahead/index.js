// const endpoint =
//   "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// const cities = [];
// fetch(endpoint)
//   .then((blob) => blob.json())
//   .then((data) => cities.push(...data));

// function findMatches(wordToMatch, cities) {
//   return cities.filter((place) => {
//     // here we need to figure out if the city or state matches what was searched
//     const regex = new RegExp(wordToMatch, "gi");
//     return place.city.match(regex) || place.state.match(regex);
//   });
// }

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// function displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray
//     .map((place) => {
//       const regex = new RegExp(this.value, "gi");
//       const cityName = place.city.replace(
//         regex,
//         `<span class="hl">${this.value}</span>`
//       );
//       const stateName = place.state.replace(
//         regex,
//         `<span class="hl">${this.value}</span>`
//       );
//       return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `;
//     })
//     .join("");
//   suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector(".search");
// const suggestions = document.querySelector(".suggestions");

// searchInput.addEventListener("change", displayMatches);
// searchInput.addEventListener("keyup", displayMatches);

const endpoint =
  "https://gist.githubusercontent.com/mykeels/1174cd68bcff6efc4f8cafb49a24a209/raw/388eea7fd85e2d615d92e473120355a0a37ab80b/states-and-cities.json";

const statesAndCities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => statesAndCities.push(...data));

function findMatches(wordToMatch, statesAndCities) {
  return statesAndCities.filter((place) => {
    // Here we need to figure out if the cities or state matches what was searched (Changes from the original was made)
    const regex = new RegExp(wordToMatch, "gi");
    if (place.cities.some((city) => city.match(regex))) {
      return true;
    }
    // Check if the state name matches the regex
    return place.name.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, statesAndCities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      // Assuming place.cities is an array of strings(Changes from the original was made)
      const cityName = place.cities
        .map((city) => {
          return city.replace(regex, `<span class = "hl">${this.value}</span>`);
        })
        .join(", ");
      // place.name is not an array but a string so it'll be directly written as:
      const stateName = place.name.replace(
        regex,
        `<span class = "hl">${this.value}</span>`
      );
      return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
    </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
