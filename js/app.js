var synth = window.speechSynthesis;
var textToSpeak = '';
var nounButton = document.getElementById('nounButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var objectButton = document.getElementById('objectButton');
var placeButton = document.getElementById('placeButton');
var generateButton = document.getElementById('generateButton');
var speakButton = document.getElementById('speakButton');
var storyText = document.getElementById('storyText');

var nouns = ["rabbit", "grandma", "astronaut", "superhero", "pirate", "dragon", "wizard"];
var verbs = ["flew with", "tickled", "battled", "discovered", "built", "sang with"];
var adjectives = ["magical", "enormous", "friendly", "mischievous", "brave"];
var objects = ["treasure", "magic wand", "telescope", "map", "potion", "key", "robot"];
var places = ["under the sea", "in a castle", "on a cloud", "at the top of a mountain", "in a secret cave"];

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var generatedStory = {
    noun: "",
    verb: "",
    adjective: "",
    object: "",
    place: ""
};

function updateStoryText() {
    textToSpeak = `${generatedStory.noun} ${generatedStory.verb} ${generatedStory.adjective} ${generatedStory.object} ${generatedStory.place}`;
    storyText.textContent = textToSpeak;
}

function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

nounButton.onclick = function() {
    generatedStory.noun = getRandomWord(nouns);
    updateStoryText();
}

verbButton.onclick = function() {
    generatedStory.verb = getRandomWord(verbs);
    updateStoryText();
}

adjectiveButton.onclick = function() {
    generatedStory.adjective = getRandomWord(adjectives);
    updateStoryText();
}

objectButton.onclick = function() {
    generatedStory.object = getRandomWord(objects);
    updateStoryText();
}

placeButton.onclick = function() {
    generatedStory.place = getRandomWord(places);
    updateStoryText();
}

generateButton.onclick = function() {
    generatedStory.noun = getRandomWord(nouns);
    generatedStory.verb = getRandomWord(verbs);
    generatedStory.adjective = getRandomWord(adjectives);
    generatedStory.object = getRandomWord(objects);
    generatedStory.place = getRandomWord(places);
    updateStoryText();
}

speakButton.onclick = function() {
    speakNow(textToSpeak);
}
