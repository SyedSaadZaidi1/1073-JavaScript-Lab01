
// VARIABLE DECLARATIONS
var customName = "";
var random = document.querySelector(".randomize");
var story = document.querySelector(".story");

var storyText =
    "It was 94 Fahrenheit outside, so :insertx: went for a walk. " +
    "When they got to :inserty:, they stared in horror for a few moments, then :insertz:. " +
    "Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// FUNCTIONS
function getRandomElementFromArray(arr1) {
    if (arr1.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * arr1.length);
    return arr1[randomIndex];
}

function randomValueFromArray(arr2) {
    return arr2[Math.floor(Math.random() * arr2.length)];
}

function generateStory() {
    var finalStory = storyText
        .replace(":insertx:", customName)
        .replace(":inserty:", randomValueFromArray(insertY))
        .replace(":insertz:", randomValueFromArray(insertZ));

    story.textContent = finalStory;
}

function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem)
                       .replace(":inserty:", yItem)
                       .replace(":insertz:", zItem);

    if (customName !== "") {
        newStory = newStory.replace("Bob", customName);
    }

    if (document.getElementById("metric").checked) {
        var weight = 300 * 0.453592;
        newStory = newStory.replace("300 pounds", weight.toFixed(2) + " KGs");

        var tempF = 94;
        var tempC = (tempF - 32) * 5/9;
        newStory = newStory.replace("94 Fahrenheit", tempC.toFixed(2) + " Celsius");
    }

    story.textContent = newStory;
    story.style.visibility = "visible";
}


random.addEventListener("click", result);
// This lab based on the excellent assessment challenge at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator
