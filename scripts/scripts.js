
// Namespace
const pokebattle = {

    grass: "bulbasaur",
    water: "squirtle",
    fire: "charmander",

};


// Audra's API Key
pokebattle.apiKeyAudra = 'Sm2MqrmUv3DBesJ7wy4vRTdhzYEsywi3',

// User Selection
pokebattle.userSelection = function() {
    $(".selection-button").on("click", function() {
        const userSelected = pokebattle[this.className.slice(17)];
        
        $(".user-selected-sprite").attr("src", `./assets/gifs/${userSelected}-back.gif`);
        pokebattle.selected = userSelected;
    });

};

// Random Browser Choice
pokebattle.browserMakeChoice = function () {
    const pokemon = ['grass', 'water', 'fire']
    const rng = Math.floor(Math.random()*pokemon.length);

    $(".browser-selected-sprite").attr("src", `./assets/gifs/${pokebattle[pokemon[rng]]}.gif`);
    browserMakeChoice = pokebattle[pokemon[rng]];

};

// Check Results
// test the text append method once the results section is complete
pokebattle.checkResults = function () {
    if (browserMakeChoice == pokebattle.selected) {
        $(".results-title").text("tie!");
        console.log("tie");

    } else if (browserMakeChoice == 'bulbasaur') {
        if (pokebattle.selected == 'charmander') {
            console.log('win');
        } else {
            console.log('lose');
        };
    } else if (browserMakeChoice == 'squirtle') {
        if (pokebattle.selected == 'bulbasaur') {
            console.log('win');
        } else {
            console.log('lose');
        };
    } else {
        if (pokebattle.selected == 'squirtle') {
            console.log('win');
        } else {
            console.log('lose');
        };
    };
};

// Battle function
pokebattle.battle = function () {
    $(".submission-button").on("click", function() {
        if (pokebattle.selected == undefined) {
            alert("select your pokemon");
        } else {
            pokebattle.browserMakeChoice();
            pokebattle.checkResults();
        };
        // console.log(`The browser's choice is ${browserMakeChoice}`);
        // console.log(`The user choice is ${pokebattle.selected}`);
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



