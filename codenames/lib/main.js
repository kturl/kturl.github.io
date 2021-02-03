//Relevant Elements
const cards = document.querySelectorAll('.card');
//word list in all CAPS
const endpoint = 'https://raw.githubusercontent.com/kturl/codenames/master/words.json';


//Event Listeners
cards.forEach(card => card.addEventListener('click', selectRed));
cards.forEach(card => card.addEventListener('dblclick', selectBlue));
// nextGame.addEventListener('click', initiateGame);

function selectRed() {
  this.classList.toggle('choseRed');
}
function selectBlue() {
  this.classList.toggle('choseBlue');
}

//STEPS
// 1) get an array of 25 words at random from the json
//  -) access json
//  -) randomly create an array of 25 integers (0 to '1 - json.length')
//  -) select the words at those positions and save in the same array

// 2) assign the words each to tile
//  -) use the array to iterate words into tiles

// 3) give card properties (red/blue/black/neutral) to the tiles
//  -) figure out game board patterns and assign to an array
//  -) combine game board properties with word array

// 5) evaluate choice, return results
//  -) the array properties will be checked at each tile selection event for true:false to determine outcome

// 4) indicate who plays first and initiate turn
