function PokeAPIService() {
    var _this = this;
    var _endpoint = 'https://pokeapi.co/api/v2';

    /**
     * GET Pokemon list
     * 
     * This method gets the first 20 Pokemon
     */
    this.get = function () {
        // Open API connection
        const Http = new XMLHttpRequest();
        const url = _endpoint + '/pokemon';
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

var pokeApiService = new PokeAPIService();