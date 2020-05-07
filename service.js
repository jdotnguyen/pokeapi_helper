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

    ListPokemonAbility() {
        return this.fetcher(this._ENDPOINT + '/ability');
    };

    ReadPokemonAbility(id) {
        return this.fetcher(this._ENDPOINT + '/ability/' + id);
    };
    
    ListPokemonCharacteristic() {
        return this.fetcher(this._ENDPOINT + '/characteristic');
    };

    ReadPokemonCharacteristic(id) {
        return this.fetcher(this._ENDPOINT + '/characteristic/' + id);
    };

    ListPokemonEggGroup() {
        return this.fetcher(this._ENDPOINT + '/egg-group');
    };

    ReadPokemonEggGroup(id) {
        return this.fetcher(this._ENDPOINT + '/egg-group/' + id);
    };

    ListPokemonGender() {
        return this.fetcher(this._ENDPOINT + '/gender');
    };

    ReadPokemonGender(id) {
        return this.fetcher(this._ENDPOINT + '/gender/' + id);
    };

    ListPokemonGrowthRate() {
        return this.fetcher(this._ENDPOINT + '/growth-rate');
    };

    ReadPokemonGrowthRate(id) {
        return this.fetcher(this._ENDPOINT + '/growth-rate/' + id);
    };

    ListPokemonNature() {
        return this.fetcher(this._ENDPOINT + '/nature');
    };

    ReadPokemonNature(id) {
        return this.fetcher(this._ENDPOINT + '/nature/' + id);
    };

    ListPokemonPokeathlonStat() {
        return this.fetcher(this._ENDPOINT + '/pokeathlon-stat');
    };

    ReadPokemonPokeathlonStat(id) {
        return this.fetcher(this._ENDPOINT + '/pokeathlon-stat/' + id);
    };

    ListPokemonColor() {
        return this.fetcher(this._ENDPOINT + '/pokemon-color');
    };

    ReadPokemonColor(id) {
        return this.fetcher(this._ENDPOINT + '/pokemon-color/' + id);
    };

    ListPokemonForm() {
        return this.fetcher(this._ENDPOINT + '/pokemon-form');
    };

    ReadPokemonForm(id) {
        return this.fetcher(this._ENDPOINT + '/pokemon-form/' + id);
    };

    ListPokemonHabitat() {
        return this.fetcher(this._ENDPOINT + '/pokemon-habitat');
    };

    ReadPokemonHabitat(id) {
        return this.fetcher(this._ENDPOINT + '/pokemon-habitat/' + id);
    };

    ListPokemonShape() {
        return this.fetcher(this._ENDPOINT + '/pokemon-shape');
    };

    ReadPokemonShape(id) {
        return this.fetcher(this._ENDPOINT + '/pokemon-shape/' + id);
    };

    ListPokemonSpecies() {
        return this.fetcher(this._ENDPOINT + '/pokemon-species');
    };

    ReadPokemonSpecies(id) {
        return this.fetcher(this._ENDPOINT + '/pokemon-species/' + id);
    };

    ListPokemonStat() {
        return this.fetcher(this._ENDPOINT + '/pokemon-stat');
    };

    ReadPokemonStat(id) {
        return this.fetcher(this._ENDPOINT + '/pokemon-stat/' + id);
    };

    ListPokemonType() {
        return this.fetcher(this._ENDPOINT + '/pokemon-type');
    };

    ReadPokemonType(id) {
        return this.fetcher(this._ENDPOINT + '/pokemon-type/' + id);
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