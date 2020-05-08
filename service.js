export default class PokeAPIHelper {
    constructor() {
        this.base_url = 'https://pokeapi.co/api/v2';
    }

    // Pokemon helpers
    GetPokemon(id = '') {
        return this.fetcher(this.base_url + '/pokemon/' + id);
    }

    GetPokemonAbility(id = '') {
        return this.fetcher(this.base_url + '/ability/' + id);
    };

    GetPokemonCharacteristic(id = '') {
        return this.fetcher(this.base_url + '/characteristic/' + id);
    };

    GetPokemonEggGroup(id = '') {
        return this.fetcher(this.base_url + '/egg-group/' + id);
    };

    GetPokemonGender(id = '') {
        return this.fetcher(this.base_url + '/gender/' + id);
    };

    GetPokemonGrowthRate(id = '') {
        return this.fetcher(this.base_url + '/growth-rate/' + id);
    };

    GetPokemonNature(id = '') {
        return this.fetcher(this.base_url + '/nature/' + id);
    };

    GetPokemonPokeathlonStat(id = '') {
        return this.fetcher(this.base_url + '/pokeathlon-stat/' + id);
    };

    GetPokemonColor(id = '') {
        return this.fetcher(this.base_url + '/pokemon-color/' + id);
    };

    GetPokemonForm(id = '') {
        return this.fetcher(this.base_url + '/pokemon-form/' + id);
    };

    GetPokemonHabitat(id = '') {
        return this.fetcher(this.base_url + '/pokemon-habitat/' + id);
    };

    GetPokemonShape(id = '') {
        return this.fetcher(this.base_url + '/pokemon-shape/' + id);
    };

    GetPokemonSpecies(id = '') {
        return this.fetcher(this.base_url + '/pokemon-species/' + id);
    };

    GetPokemonStat(id = '') {
        return this.fetcher(this.base_url + '/pokemon-stat/' + id);
    };

    GetPokemonType(id = '') {
        return this.fetcher(this.base_url + '/pokemon-type/' + id);
    };

    // Move Helpers
    GetMove(id = '') {
        return this.fetcher(this.base_url + '/move/' + id);
    }

    GetMoveAilment(id = '') {
        return this.fetcher(this.base_url + '/move-ailment/' + id);
    }

    GetMoveBattleStyle(id = '') {
        return this.fetcher(this.base_url + '/move-battle-style/' + id);
    }

    GetMoveCategory(id = '') {
        return this.fetcher(this.base_url + '/move-category/' + id);
    }

    GetMoveDamageClass(id = '') {
        return this.fetcher(this.base_url + '/move-damage-class/' + id);
    }

    GetMoveLearnMethod(id = '') {
        return this.fetcher(this.base_url + '/move-learn-method/' + id);
    }

    GetMoveTarget(id = '') {
        return this.fetcher(this.base_url + '/move-target/' + id);
    }

    // Machine Helpers
    GetMachine(id = '') {
        return this.fetcher(this.base_url + '/machine/' + id);
    }

    // Location Helpers
    GetLocation(id = '') {
        return this.fetcher(this.base_url + '/location/' + id);
    }

    GetLocationArea(id = '') {
        return this.fetcher(this.base_url + '/location-area/' + id);
    }

    GetPalParkArea(id = '') {
        return this.fetcher(this.base_url + '/pal-park-area/' + id);
    }

    GetRegion(id = '') {
        return this.fetcher(this.base_url + '/region/' + id);
    }

    // Item Helpers
    GetItem(id = '') {
        return this.fetcher(this.base_url + '/item/' + id);
    }

    GetItemAttribute(id = '') {
        return this.fetcher(this.base_url + '/item-attribute/' + id);
    }

    GetItemCategory(id = '') {
        return this.fetcher(this.base_url + '/item-category/' + id);
    }

    GetItemFlingEffect(id = '') {
        return this.fetcher(this.base_url + '/item-fling-effect/' + id);
    }

    GetItemPocket(id = '') {
        return this.fetcher(this.base_url + '/item-pocket/' + id);
    }

    // Game Helpers
    GetGameGeneration(id = '') {
        return this.fetcher(this.base_url + '/generation/' + id);
    }

    GetGamePokedex(id = '') {
        return this.fetcher(this.base_url + '/pokedex/' + id);
    }

    GetGameVersion(id = '') {
        return this.fetcher(this.base_url + '/version/' + id);
    }

    GetGameVersionGroup(id = '') {
        return this.fetcher(this.base_url + '/version-group/' + id);
    }

    // Evolution Helpers
    GetEvolutionChain(id = '') {
        return this.fetcher(this.base_url + '/evolution-chain/' + id);
    }

    GetEvolutionTrigger(id = '') {
        return this.fetcher(this.base_url + '/evolution-trigger/' + id);
    }

    // Encounter Helpers
    GetEncounterMethod(id = '') {
        return this.fetcher(this.base_url + '/encounter-method/' + id)
    }

    GetEncounterCondition(id = '') {
        return this.fetcher(this.base_url + '/encounter-condition/' + id)
    }

    GetEncounterConditionValue(id = '') {
        return this.fetcher(this.base_url + '/encounter-condition-value/' + id)
    }

    // Contest Helpers
    GetContestType(id = '') {
        return this.fetcher(this.base_url + '/contest-type/' + id);
    }

    GetContestEffect(id = '') {
        return this.fetcher(this.base_url + '/contest-effect/' + id);
    }

    GetContestSuperEffect(id = '') {
        return this.fetcher(this.base_url + '/super-contest-effect/' + id);
    }

    // Berry Helpers
    GetBerry(id = '') {
        return this.fetcher(this.base_url + '/berry/' + id);
    }

    GetBerryFirmness(id = '') {
        return this.fetcher(this.base_url + '/berry-firmness/' + id);
    }

    GetBerryFlavor(id = '') {
        return this.fetcher(this.base_url + '/berry-flavor/' + id);
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