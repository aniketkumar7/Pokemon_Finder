// Fetch =  Function used for making HTTP requests to fetch resources.
//          Simplifies asynchronous data fetching in JavaScript
//          used for interacting with APIs to retrieve
//          and send data asynchronously over the web.
//          fetch() method returns a promise that resolves to the response object
//          fetch(url, {method: 'GET', body: JSON.stringify(data)})
//          for method: GET, POST, PUT, PATCH, DELETE
//          for body: JSON.stringify(data)
//          for headers: {'Content-Type': 'application/json'}

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(res => {
//         if (!res.ok) {
//             throw Error(res.statusText);
//         }
//         return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const pokemonCard = document.querySelector(".pokemoncard");
const FullScreenBtn = document.querySelector(".fullscreen");
// Update UI elements
const img = document.getElementById("pokemon-img");
const pname = document.getElementById("pokemon-name");
const type = document.getElementById("pokemon-type");
const bottom = document.querySelector(".pokemon-details");

async function getPokemon(event) {
  if (event || (event.type === "keypress" && event.keyCode === 13)) {
    const pokemonName = document.getElementById("pokemon").value.toLowerCase();

    try {
      // Fetch data from PokeAPI
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      if (!res.ok) {
        throw new Error("Could not fetch the data for that Pokemon.");
      }

      const data = await res.json();

      img.src = data.sprites.other.dream_world.front_default;
      pname.innerText = data.name.toUpperCase();
      type.innerText = `${data.types[0].type.name.toUpperCase()} TYPE POKEMON`;

      img.style.display = "block";
      bottom.style.display = "flex";

      // Clear input field
      pokemonInput.value = "";
    } catch (err) {
      console.error(err); // Log errors for debugging
    }
  } else {
    // Handle button click event (optional)
    // You can add specific logic for button click here,
    // but it's not required for triggering on Enter key press.
  }
}

// to full screen the image
FullScreenBtn.addEventListener("click", function () {
  img.classList.toggle("fullscreen");
  pokemonCard.classList.toggle("fullscreen");
});

// Attach the getPokemon function to both the button click and input keypress events
const pokemonInput = document.getElementById("pokemon");
pokemonInput.addEventListener("keypress", getPokemon);

const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", getPokemon);
