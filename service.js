class PokeAPIHelper {
    // Endpoint
    _ENDPOINT = 'https://pokeapi.co/api/v2';

    constructor() {
        this.call;
    }

    // Pokemon helpers
    ListPokemon() {
        return this.fetcher(this._ENDPOINT + '/pokemon');
    }

    ReadPokemon(id) {
        return this.fetcher(this._ENDPOINT + '/pokemon/' + id);
    }

    // Ability helpers
    ListAbility(id) {
        return this.fetcher(this._ENDPOINT + '/ability');
    };

    // Move Helpers
    ListMove() {
        return this.fetcher(this._ENDPOINT + '/move');
    }

    // Machine Helpers
    ListMachine() {
        return this.fetcher(this._ENDPOINT + '/machine');
    }

    // Location Helpers
    ListLocation() {
        return this.fetcher(this._ENDPOINT + '/location');
    }

    // Item Helpers
    ListItem() {
        return this.fetcher(this._ENDPOINT + '/item');
    }

    // Game Helpers
    ListGameGeneration() {
        return this.fetcher(this._ENDPOINT + '/generation');
    }

    // Evolution Helpers
    ListEvolutionChain() {
        return this.fetcher(this._ENDPOINT + '/evolution-chain');
    }

    // Encounter Helpers
    ListEncounterMethod() {
        return this.fetcher(this._ENDPOINT + '/encounter-method')
    }

    // Contest Helpers
    ListContestType() {
        return this.fetcher(this._ENDPOINT + '/contest-type');
    }

    // Berry Helpers
    ListBerry() {
        return this.fetcher(this._ENDPOINT + '/berry')
    }


    // Main GET fetch command
    fetcher(url) {
        return fetch(url)
            .then(response => response.json())
            .then(response => {
                return response
            })
            .catch(error => console.warn(error));
    }
}