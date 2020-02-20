
// Namespace
const pokebattle = {

    grass: "bulbasaur",
    water: "squirtle",
    fire: "charmander",

};


// Audra's API Key
pokebattle.apiKeyAudra = 'Sm2MqrmUv3DBesJ7wy4vRTdhzYEsywi3',
pokebattle.apiKeyMatt = "ytxEQAJjiRYEKOyGlh2ahsxE35jwm8Cz",


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
pokebattle.reaction = " ";

pokebattle.checkResults = function () {
    if (browserMakeChoice == pokebattle.selected) {
        $(".results-title").text("tie!");
        // tie
        const reaction = "pokemon confused";
        pokebattle.getGif(reaction);

    } else if (browserMakeChoice == 'bulbasaur') {
        if (pokebattle.selected == 'charmander') {
            // win
            $(".results-title").text("you win!");
            const reaction = "pokemon happy";
            pokebattle.getGif(reaction);
        } else {
            // lose
            $(".results-title").text("you lose!");
            const reaction = "pokemon sad";
            pokebattle.getGif(reaction);
        };
    } else if (browserMakeChoice == 'squirtle') {
        if (pokebattle.selected == 'bulbasaur') {
            // win
            $(".results-title").text("you win!");
            const reaction = "pokemon happy";
            pokebattle.getGif(reaction);
        } else {
            // lose
            $(".results-title").text("you lose!");
            const reaction = "pokemon sad";
            pokebattle.getGif(reaction);
        };
    } else {
        if (pokebattle.selected == 'squirtle') {
            // win
            $(".results-title").text("you win!");
            const reaction = "pokemon happy";
            pokebattle.getGif(reaction);
        } else {
            $(".results-title").text("you lose!");
            const reaction = "pokemon sad";
            pokebattle.getGif(reaction);
        };
    };
};

// API ajax call
pokebattle.getGif = function(reaction) {
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search",
        method: "GET",
        datatype: "json",
        data: {
            api_key: pokebattle.apiKeyMatt,
            q: reaction,
        }
    }).then(function (response) {
        const index = Math.floor(Math.random() * 15);
        // parameter one: gif
        // parameter two: alt text
        pokebattle.displayGif(response.data[index].images.downsized.url, response.data[index].title)
    });
};

pokebattle.displayGif = function(gif, alt) {
    const htmlToAppend = `
        <img src="${gif}" alt="${alt}" class="results-gif">
    `

    $('.results-gif-container').html(htmlToAppend);    
};

// Battle function
pokebattle.battle = function() {
    $(".submission-button").on("click", function() {
        if (pokebattle.selected == undefined) {
            alert("select your pokemon");
        } else {
            pokebattle.browserMakeChoice();
            pokebattle.checkResults();

            setTimeout(function() {
                $(".results").removeClass("hidden").addClass("animated slideInLeft");
            }, 0000);


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



