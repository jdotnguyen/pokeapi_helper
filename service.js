function PokeAPIService() {
    // Endpoint
    this._ENDPOINT = 'https://pokeapi.co/api/v2';

    // Import helpers
    this.pokemon = new Pokemon();
    this.move = new Move();
    this.machine = new Machine();
    this.location = new Location();
    this.item = new Item();
    this.game = new Game();
    this.evolution = new Evolution();
    this.encounter = new Encounter();
    this.contest = new Contest();
    this.berry = new Berry();

    /**
     * Error handler
     * 
     * This method is used to take in errors and send the data back to the user so they know what's wrong
     **/
    this.errorHandler = function (error, status) {
        if (String(status).charAt(0) == "2") {
            return "Success";
        } else {
            return error.error.errors[0].message;
        }
    };
}

// Pokemon Helpers
function Pokemon() {
    // Get Pokemon list
    this.list = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/pokemon';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return _this.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Move Helpers
function Move() {
    // Get moves list
    this.list = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/move';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return PokeHelper.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Machine Helpers
function Machine() {
    // Get moves list
    this.list = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/machine';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return PokeHelper.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Location Helpers
function Location() {
    // Get moves list
    this.list = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/location';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return PokeHelper.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Item Helpers
function Item() {
    // Get moves list
    this.list = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/item';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return PokeHelper.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Game Helpers
function Game() {
    // Get moves list
    this.listGenerations = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/generation';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return PokeHelper.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Evolution Helpers
function Evolution() {
    // Get moves list
    this.listChains = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/evolution-chain';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return PokeHelper.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Encounter Helpers
function Encounter() {
    // Get moves list
    this.listMethods = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/encounter-method';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return PokeHelper.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Contest Helpers
function Contest() {
    // Get moves list
    this.listTypes = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/contest-type';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return PokeHelper.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Berry Helpers
function Berry() {
    // Get moves list
    this.list = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = PokeHelper._ENDPOINT + '/berry';
        Http.open('GET', url, false);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send();

        var response = JSON.parse(Http.response);

        //Handle errors otherwise process data
        if (response.hasOwnProperty("error")) {
            return PokeHelper.errorHandler(response, Http.status);
        } else {
            // Return data
            return response;
        }
    };
}

// Init
var PokeHelper = new PokeAPIService();