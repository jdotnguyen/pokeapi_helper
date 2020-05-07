# pokeapi_helper
Simple Javascript wrapper to get PokeAPI calls. Using native JavaScript asynchronous fetch requests.

## May 7, 2020 Update
- Added all calls
- Simplified to just `.Get<ENTITY>(<OPTIONAL_PARAMETER>)` so user does not have to chose between List/Read

## May 6, 2020 Update
- Converted code to use promises and fetch to make calls asynchronous.

## Install Instructions
1. In your Terminal, run `npm install pokeapi_helper`.
2. In your project either import the service.js file in your HTML document or as `import { PokeHelper } from 'PATH/TO/YOUR/node_modules/pokeapi_helper/service';`
3. Declare the helper like `let pokeHelper = new PokeHelper();`.
4. Run a simple list command such as `pokeHelper.ListPokemon().then(response => console.log(response));` to get the list of first 20 Pokémon.
5. ???
6. Profit.
