class PokeAPIHelper {
    // Endpoint
    _ENDPOINT = 'https://pokeapi.co/api/v2';

    // Pokemon helpers
    GetPokemon(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokemon/' + id);
    }

    GetPokemonAbility(id = '') {
        return this.fetcher(this._ENDPOINT + '/ability/' + id);
    };

    GetPokemonCharacteristic(id = '') {
        return this.fetcher(this._ENDPOINT + '/characteristic/' + id);
    };

    GetPokemonEggGroup(id = '') {
        return this.fetcher(this._ENDPOINT + '/egg-group/' + id);
    };

    GetPokemonGender(id = '') {
        return this.fetcher(this._ENDPOINT + '/gender/' + id);
    };

    GetPokemonGrowthRate(id = '') {
        return this.fetcher(this._ENDPOINT + '/growth-rate/' + id);
    };

    GetPokemonNature(id = '') {
        return this.fetcher(this._ENDPOINT + '/nature/' + id);
    };

    GetPokemonPokeathlonStat(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokeathlon-stat/' + id);
    };

    GetPokemonColor(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokemon-color/' + id);
    };

    GetPokemonForm(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokemon-form/' + id);
    };

    GetPokemonHabitat(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokemon-habitat/' + id);
    };

    GetPokemonShape(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokemon-shape/' + id);
    };

    GetPokemonSpecies(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokemon-species/' + id);
    };

    GetPokemonStat(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokemon-stat/' + id);
    };

    GetPokemonType(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokemon-type/' + id);
    };

    // Move Helpers
    GetMove(id = '') {
        return this.fetcher(this._ENDPOINT + '/move/' + id);
    }

    GetMoveAilment(id = '') {
        return this.fetcher(this._ENDPOINT + '/move-ailment/' + id);
    }

    GetMoveBattleStyle(id = '') {
        return this.fetcher(this._ENDPOINT + '/move-battle-style/' + id);
    }

    GetMoveCategory(id = '') {
        return this.fetcher(this._ENDPOINT + '/move-category/' + id);
    }

    GetMoveDamageClass(id = '') {
        return this.fetcher(this._ENDPOINT + '/move-damage-class/' + id);
    }

    GetMoveLearnMethod(id = '') {
        return this.fetcher(this._ENDPOINT + '/move-learn-method/' + id);
    }

    GetMoveTarget(id = '') {
        return this.fetcher(this._ENDPOINT + '/move-target/' + id);
    }

    // Machine Helpers
    GetMachine(id = '') {
        return this.fetcher(this._ENDPOINT + '/machine/' + id);
    }

    // Location Helpers
    GetLocation(id = '') {
        return this.fetcher(this._ENDPOINT + '/location/' + id);
    }

    GetLocationArea(id = '') {
        return this.fetcher(this._ENDPOINT + '/location-area/' + id);
    }

    GetPalParkArea(id = '') {
        return this.fetcher(this._ENDPOINT + '/pal-park-area/' + id);
    }

    GetRegion(id = '') {
        return this.fetcher(this._ENDPOINT + '/region/' + id);
    }

    // Item Helpers
    GetItem(id = '') {
        return this.fetcher(this._ENDPOINT + '/item/' + id);
    }

    GetItemAttribute(id = '') {
        return this.fetcher(this._ENDPOINT + '/item-attribute/' + id);
    }

    GetItemCategory(id = '') {
        return this.fetcher(this._ENDPOINT + '/item-category/' + id);
    }

    GetItemFlingEffect(id = '') {
        return this.fetcher(this._ENDPOINT + '/item-fling-effect/' + id);
    }

    GetItemPocket(id = '') {
        return this.fetcher(this._ENDPOINT + '/item-pocket/' + id);
    }

    // Game Helpers
    GetGameGeneration(id = '') {
        return this.fetcher(this._ENDPOINT + '/generation/' + id);
    }

    GetGamePokedex(id = '') {
        return this.fetcher(this._ENDPOINT + '/pokedex/' + id);
    }

    GetGameVersion(id = '') {
        return this.fetcher(this._ENDPOINT + '/version/' + id);
    }

    GetGameVersionGroup(id = '') {
        return this.fetcher(this._ENDPOINT + '/version-group/' + id);
    }

    // Evolution Helpers
    GetEvolutionChain(id = '') {
        return this.fetcher(this._ENDPOINT + '/evolution-chain/' + id);
    }

    GetEvolutionTrigger(id = '') {
        return this.fetcher(this._ENDPOINT + '/evolution-trigger/' + id);
    }

    // Encounter Helpers
    GetEncounterMethod(id = '') {
        return this.fetcher(this._ENDPOINT + '/encounter-method/' + id)
    }

    GetEncounterCondition(id = '') {
        return this.fetcher(this._ENDPOINT + '/encounter-condition/' + id)
    }

    GetEncounterConditionValue(id = '') {
        return this.fetcher(this._ENDPOINT + '/encounter-condition-value/' + id)
    }

    // Contest Helpers
    GetContestType(id = '') {
        return this.fetcher(this._ENDPOINT + '/contest-type/' + id);
    }

    GetContestEffect(id = '') {
        return this.fetcher(this._ENDPOINT + '/contest-effect/' + id);
    }

    GetContestSuperEffect(id = '') {
        return this.fetcher(this._ENDPOINT + '/super-contest-effect/' + id);
    }

    // Berry Helpers
    GetBerry(id = '') {
        return this.fetcher(this._ENDPOINT + '/berry/' + id);
    }

    GetBerryFirmness(id = '') {
        return this.fetcher(this._ENDPOINT + '/berry-firmness/' + id);
    }

    GetBerryFlavor(id = '') {
        return this.fetcher(this._ENDPOINT + '/berry-flavor/' + id);
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