"use strict";
const endpoint = "https://gist.githubusercontent.com/mykeels/1174cd68bcff6efc4f8cafb49a24a209/raw/388eea7fd85e2d615d92e473120355a0a37ab80b/states-and-cities.json";
const statesAndCities = [];
fetch(endpoint)
    .then((response) => response.json())
    .then((data) => statesAndCities.push(...data));
function findMatches(wordToMatch, statesAndCities) {
    return statesAndCities.filter((place) => {
        const regex = new RegExp(wordToMatch, "gi");
        if (place.cities.some((city) => city.match(regex))) {
            return true;
        }
        return place.name.match(regex);
    });
}
function displayMatches() {
    const matchArray = findMatches(this.value, statesAndCities);
    const html = matchArray
        .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.cities
            .map((city) => city.replace(regex, `<span class="hl">${this.value}</span>`))
            .join(", ");
        const stateName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
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
