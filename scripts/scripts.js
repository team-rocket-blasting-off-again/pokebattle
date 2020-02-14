
// Namespace
const pokebattle = {

    rock: "./",
    grass: "",
    flying: "",
    browser: [rock, grass, flying],
};



pokebattle.apiKeyAudra = 'Sm2MqrmUv3DBesJ7wy4vRTdhzYEsywi3',

pokebattle.userSelection = function() {
    
    $("button").on("click", function() {
        const selected = this.className;
        console.log(selected);
        // append html img with string in object
    });
};

pokebattle.browserSelection = function() {
    
};


 
// Battle function
pokebattle.battle = function() {
    // pokemon selection event
};

// Init function
pokebattle.init = function() {
    this.battle();
    this.userSelection();
};

// Doc Ready function
$(function () {
    pokebattle.init();
});



