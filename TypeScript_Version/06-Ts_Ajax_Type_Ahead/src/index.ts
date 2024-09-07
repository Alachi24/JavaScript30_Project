// Define a type for the structure of our data
type Place = {
  name: string; // Name of the state
  cities: string[]; // Array of city names
};

// The API endpoint to fetch data from
const endpoint =
  "https://gist.githubusercontent.com/mykeels/1174cd68bcff6efc4f8cafb49a24a209/raw/388eea7fd85e2d615d92e473120355a0a37ab80b/states-and-cities.json";

const statesAndCities: Place[] = []; // List to hold the fetched data

// Fetch data and fill 'statesAndCities' array
fetch(endpoint)
  .then((response) => response.json())
  .then((data: Place[]) => statesAndCities.push(...data)); // We know data is a list of Place objects

// Function to find matches in states or cities
function findMatches(wordToMatch: string, statesAndCities: Place[]): Place[] {
  return statesAndCities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    // Check if any city matches
    if (place.cities.some((city) => city.match(regex))) {
      return true;
    }
    // Check if the state name matches
    return place.name.match(regex);
  });
}

// Function to display matching results
function displayMatches(this: HTMLInputElement) {
  const matchArray = findMatches(this.value, statesAndCities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.cities
        .map((city) =>
          city.replace(regex, `<span class="hl">${this.value}</span>`)
        )
        .join(", ");
      const stateName = place.name.replace(
        regex,
        `<span class="hl">${this.value}</span>`
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

// Get the input field and suggestions container from the document
const searchInput = document.querySelector<HTMLInputElement>(".search")!;
const suggestions = document.querySelector<HTMLUListElement>(".suggestions")!;

// Listen for changes and keyup events in the input field
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
