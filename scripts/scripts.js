
// Namespace
const pokebattle = {

    grass: " ",
    water: " ",
    fire: " ",
    //? browser: [rock, grass, flying]

};


// Audra's API Key
pokebattle.apiKeyAudra = 'Sm2MqrmUv3DBesJ7wy4vRTdhzYEsywi3',

// User Selection
pokebattle.userSelection = function() {
    
    $("button").on("click", function() {
        pokebattle.selected = this.className;
    });
};

// Random Browser Choice
pokebattle.browserMakeChoice = function () {
    pokebattle.pokemon = [
        'grass',
        'water',
        'fire'
    ]
    // ? Not sure if I set this up right
    pokebattle.pokemon.index = Math.floor(Math.random()*pokebattle.pokemon.length);
    browserMakeChoice = pokebattle.pokemon[pokebattle.pokemon.index];
};

// Check Results
pokebattle.checkResults = function () {
    if (browserMakeChoice == pokebattle.selected) {
        console.log('tie');
    } else if (browserMakeChoice == 'grass') {
        if (pokebattle.selected == 'fire') {
            console.log('win');
        } else {
            console.log('lose');
        }
    } else if (browserMakeChoice == 'water') {
        if (pokebattle.selected == 'grass') {
            console.log('win');
        } else {
            console.log('lose');
        }
    } else {
        if (pokebattle.selected == 'water') {
            console.log('win');
        } else {
            console.log('lose');
        }
    }
}
 
// Battle function
pokebattle.battle = function () {
    $("input").on("click", function() {
        pokebattle.browserMakeChoice();
        console.log(`The browser's choice is ${browserMakeChoice}`);
        console.log(`The user choice is ${pokebattle.selected}`);
        pokebattle.checkResults();
    });

};

// Init function
pokebattle.init = function() {
    this.userSelection();
    this.battle();
};

// Doc Ready function
$(function () {
    pokebattle.init();
});



