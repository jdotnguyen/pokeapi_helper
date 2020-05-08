# pokeapi_helper
Simple Javascript wrapper to get PokeAPI calls. Using native JavaScript asynchronous fetch requests.

## May 7, 2020 Update
- Added all calls
- Simplified to just `.Get<ENTITY>(<OPTIONAL_PARAMETER>)` so user does not have to chose between List/Read

## May 6, 2020 Update
- Converted code to use promises and fetch to make calls asynchronous.

## Install Instructions
1. In your Terminal, run `npm install pokeapi_helper`.
2. In your project either import the service.js file in your HTML document or as `import PokeAPIHelper from 'pokeapi_helper';`
3. Declare the helper like `const PokeHelper = new PokeAPIHelper();`.
4. Run a simple list command such as `PokeHelper.ListPokemon().then(response => console.log(response));` to get the list of first 20 Pokémon.
5. ???
6. Profit.
