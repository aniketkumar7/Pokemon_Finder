# Pokémon Finder

Pokémon Finder is a web application that allows users to search for Pokémon using an external API. The app displays Pokémon information, including images and types. It's built with HTML, CSS, and JavaScript.

## Features

- **Search**: Enter the name of a Pokémon to retrieve its details.
- **Display**: View Pokémon images and types.

## Tech Stack

- **HTML**: For structuring the web page.
- **CSS**: For styling the user interface.
- **JavaScript**: To interact with the Pokémon API and display data.

## Getting Started

1. Clone this repository to your local machine.
2. Open `index.html` in your preferred web browser.
3. Enter a Pokémon name in the search box and hit "Search."

## External API

We're using the PokéAPI to fetch Pokémon data. Make sure you have an internet connection to use this feature.

## Fetching Pokémon Data with `async/await`

To fetch Pokémon data asynchronously, we'll use the `async/await` syntax in JavaScript. Here's an example of how to retrieve Pokémon details:

```javascript
// Define an async function to fetch Pokémon data
async function getPokemonDetails(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error('Pokémon not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error.message);
  }
}

// Example usage
const pokemonName = 'pikachu';
getPokemonDetails(pokemonName)
  .then((pokemonData) => {
    console.log('Pokémon details:', pokemonData);
    // Display the data on your web page
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
```


## Acknowledgments
Thanks to the PokéAPI for providing the data.
Inspired by other Pokémon-related projects on GitHub.
