
// Namespace
const pokebattle = {
    rock: "rock ",
    grass: " ",
    flying: " ",
    //? browser: [rock, grass, flying],
};


// Audra's API Key
pokebattle.apiKeyAudra = 'Sm2MqrmUv3DBesJ7wy4vRTdhzYEsywi3',

    // User Selection
    pokebattle.userSelection = function () {

        $("button").on("click", function () {
            pokebattle.selected = this.className;
            // append html img with string in object
        });
    };

// Random Browser Choice
pokebattle.browserMakeChoice = function () {
    pokebattle.pokemon = [
        'rock',
        'grass',
        'flying'
    ]
    // * Not sure if I set this up right
    pokebattle.pokemon.index = Math.floor(Math.random() * pokebattle.pokemon.length);
    browserMakeChoice = pokebattle.pokemon[pokebattle.pokemon.index];
}

// Calling the Random Browser Choice on click
pokebattle.browserSelection = function () {
    $("input").on("click", function () {
        pokebattle.browserMakeChoice();
        //* Just put pokebattle.selected in here to ensure it was being recorded not just when clicked on alone
        console.log(pokebattle.selected);
        console.log(browserMakeChoice);

    });
};

// Battle function
pokebattle.battle = function () {
    // pokemon selection event
};

// Init function
pokebattle.init = function () {
    this.userSelection();
    this.browserSelection();
    this.battle();
};

// Doc Ready function
$(function () {
    pokebattle.init();
});



