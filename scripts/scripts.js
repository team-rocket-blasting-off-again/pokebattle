
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
// ? Please check if statement syntax
pokebattle.checkResults = function () {
    if (pokebattle.userSelection == 'grass') {
        checkGrass();
    } else if (pokebattle.userSelection == 'water') {
        checkWater();
    } else {
        checkFire();
    };
};

pokebattle.checkResults.checkGrass = function () {
    if (browserMakeChoice == 'grass') {
        console.log(`It's a tie`);
    } else if (browserMakeChoice == 'fire') {
        console.log(`You lose`);
    } else {
        console.log(`You win`);
    }
};

pokebattle.checkResults.checkWater = function () {
    if (browserMakeChoice == 'water') {
        console.log(`It's a tie`);
    } else if (browserMakeChoice == 'grass') {
        console.log(`You lose`);
    } else {
        console.log(`You win`);
    }
};

pokebattle.checkResults.checkFire = function () {
    if (browserMakeChoice == 'fire') {
        console.log(`It's a tie`);
    } else if (browserMakeChoice == 'water') {
        console.log(`You lose`); 
    } else {
        console.log(`You win`);
    }
};
 
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



