// Notes

// Script table of contents
// The namespace is organized as follows:
//  1. Namespace declaration 
//  2. Functions
    //  i. User selection
//      ii. Random browser selection
//      iii. Check results
//      iv. API call
//      v. Display gif 
//      vi. Battle
//  3. Initialize function
//  4. Document ready function


// Logic flow
// Pokebattle is rock paper scissors but pokemon themed:
//  grass beats water
//  water beats fire
//  fire beats grass
// Game flow:
//  User selects pokemon, then clicks on battle button
//  Battle button prompts the browser to make random selection, then determine game result, and lookup gif in api call 
// Because the user is required to select a pokemon prior to running the battle function, it is called separately from the battle function within the init function


// Namespace
const pokebattle = {
    grass: "bulbasaur",
    water: "squirtle",
    fire: "charmander",
  
    apiKeyAudra: "Sm2MqrmUv3DBesJ7wy4vRTdhzYEsywi3",
    apiKeyMatt: "ytxEQAJjiRYEKOyGlh2ahsxE35jwm8Cz",
};


// User Selection
// Event handler looks up pokemon type in namespace object
// Loads image to sprite container
// Stores selected pokemon to namespace key-value pair
pokebattle.userSelection = function() {
    $(".selection-button").on("click", function() {
        const userSelected = pokebattle[this.className.slice(17)];
        
        $(".user-selected-sprite").attr("src", `./assets/gifs/${userSelected}-back.gif`, "alt", `${userSelected} bouncing with their back to the user`);
        pokebattle.selected = userSelected;
    });
};


// Random Browser Choice
// Random number is stored in variable, which will select a random array item
// The randomized selection will load image to sprite container (array item === object key)
// Stores selected pokemon to namespace key-value pair
pokebattle.browserMakeChoice = function() {
    const pokemon = ['grass', 'water', 'fire']
    const rng = Math.floor(Math.random()*pokemon.length);

    $(".browser-selected-sprite").attr("src", `./assets/gifs/${pokebattle[pokemon[rng]]}.gif`);
    browserMakeChoice = pokebattle[pokemon[rng]];
};


// Check Results
// Function will compare user selection with browser selection
// Resulting action regardless of outcome will:
//  1. change title text in results div
//  2. store reaction string in variable, which is used to lookup the gif within the giphy API call

// There are four situations in the conditional statements:
//  1. both browser and user selected the same pokemon, resulting in a tie
//  2. the browser chose grass (bulbasaur)
//  3. the browser chose water (squirtle)
//  4. the browser chose fire (charmander)

// For each condition, there is a nested statement that looks at if the user has selected the two pokemon that doesn't result in a tie
pokebattle.checkResults = function() {
    if (browserMakeChoice == pokebattle.selected) {
        $(".results-title").text("Tie!");
        // Tie
        const reaction = "pokemon confused";
        pokebattle.getGif(reaction);

    } else if (browserMakeChoice == 'bulbasaur') {
        if (pokebattle.selected == 'charmander') {
            // Win
            $(".results-title").text("You Win!");
            const reaction = "pokemon happy";
            pokebattle.getGif(reaction);
        } else {
            // Lose
            $(".results-title").text("You Lose!");
            const reaction = "pokemon sad";
            pokebattle.getGif(reaction);
        };

    } else if (browserMakeChoice == 'squirtle') {
        if (pokebattle.selected == 'bulbasaur') {
            // Win
            $(".results-title").text("You Win!");
            const reaction = "pokemon happy";
            pokebattle.getGif(reaction);
        } else {
            // Lose
            $(".results-title").text("You Lose!");
            const reaction = "pokemon sad";
            pokebattle.getGif(reaction);
        };

    } else {
        if (pokebattle.selected == 'squirtle') {
            // Win
            $(".results-title").text("You Win!");
            const reaction = "pokemon happy";
            pokebattle.getGif(reaction);
        } else {
            // Lose
            $(".results-title").text("You Lose!");
            const reaction = "pokemon sad";
            pokebattle.getGif(reaction);
        };
    };
};


// API ajax call
// Calls into giphy to search for gif (via data.q)
// (then)
// Random number is stored, which is used to lookup a random gif within the giphy object
// The downsized object (within the giphy object) is an image-size type, we chose this as it was the first option that worked, no logic behind it otherwise
// The first parameter in the .displayGif method is used to determine the gif url 
// The second parameter in the .displayGif method is used to determine the gif title, which is used as the alt text of the image element
pokebattle.getGif = function(reaction) {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search",
        method: "GET",
        datatype: "json",
        data: {
            api_key: pokebattle.apiKeyMatt, 
            q: reaction,
        }
    }).then(function(response) {
        const index = Math.floor(Math.random() * 15);
        // parameter one: gif
        // parameter two: alt text
        pokebattle.displayGif(response.data[index].images.downsized.url, response.data[index].title)
    });
};


// Display gif
// The two parameters in the .displayGif method matches with the parameters set in the ajax call 
// The first parameter in the .displayGif method is used to determine the gif url 
// The second parameter in the .displayGif method is used to determine the gif title, which is used as the alt text of the image element
// Using the .html method will replace the img element, so that the image elements do not stack on each other everytime the .displayGif method is called
pokebattle.displayGif = function(gif, alt) {
    const htmlToAppend = `
        <img src="${gif}" alt="${alt}" class="results-gif">
    `;
    $('.results-gif-container').html(htmlToAppend);    
};


// Battle function
// The if function will determine whether the user has selected a pokemon prior to clicking the battle button 
// If the user selected a pokemon and clicked on the button:
//  1. the browser will randomly select a pokemon 
//  2. the checkResults method will compare both selections to determine the outcome of the game
//  3. once an outcome has been determined, a delay of 0.5 seconds will occur before displaying the results div
pokebattle.battle = function() {
    $(".submission-button").on("click", function() {
        if (pokebattle.selected == undefined) {
            alert("Please select your pokemon!");
        } else {
            pokebattle.browserMakeChoice();
            pokebattle.checkResults();

            setTimeout(function() {
                $(".results").removeClass("hidden").addClass("animated slideInLeft");
                $(".pulldown-menu").addClass("hidden");
            }, 0500);
        };
    });
};


// Init function
// The userSelection method must be run separately due to the order of operations
pokebattle.init = function() {
    this.userSelection();
    this.battle();

    const mql = window.matchMedia('(max-width: 641px)');
    
    function titleChange(event) {
        if(event.matches) {
            $(".title-image").attr("src", "./assets/pokebattle-title-small.png");
        };
    };

    mql.addListener(titleChange); 
};
// Doc Ready function
$(function() {
    pokebattle.init();
});

