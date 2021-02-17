//word list in all CAPS
const endpoint = 'https://raw.githubusercontent.com/kturl/codenames/master/words.json';
const dictionary = [];

//fetches data from json link, parses it with .json into a proper JSON file, pushes each item to the dictionary array by (...) spreading the data into it
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => dictionary.push(...data));

//Relevant Elements
const cards = document.querySelectorAll('.card');
const cardOverlays = document.querySelectorAll('.cardOverlay');
let ul = document.getElementById('wordList');
let redScore = document.querySelector('.redScore');
let blueScore = document.querySelector('.blueScore');
let words = [];
let redPoints = 0;
let bluePoints = 0;

//Event Listeners
cardOverlays.forEach(card => card.addEventListener('click', colorReveal));
cardOverlays.forEach(card => card.addEventListener('click', score));

// Funky Functions
function freshList() {
  if (ul.childElementCount >= 0) {
    ul.innerHTML = '';
  }
  cardOverlays.forEach(card => card.addEventListener('click', colorReveal));
  cardOverlays.forEach(card => card.addEventListener('click', score));
  //reset the scores
  redPoints = 0;
  bluePoints = 0;
  redScore.innerHTML = redPoints;
  blueScore.innerHTML = bluePoints;

  removeColor();
  genWordList();
  // assign death card first, at random, then red then blue cards (the order isn't important), then assign the rest as neutral
  assignDeath();
  assignRed();
  assignBlue();
  assignNeutral();
  assignWord();
}

function colorReveal(){
  let cardColor = this.getAttribute('data-card-color');
  this.classList.add(cardColor);
}

// creates a random number from 0 to dictionary.length-1 [because the index number are 0 to 1 less than the length of the array] and chooses 25 corresponding words to place into words[]
function genWordList() {
  words = [];
  for ( let i = 0; i < 25; i ++ ) {
    let x = Math.floor(Math.random() * ((dictionary.length) - 1));
  //ensures each word in the list is an object with a default 'false' color property
    let currentWord = { word:dictionary[x], color: false }
  // if/else checks if the word is already in the list before pushing it to words[] or setting the for loop back one iteration
    if (words.includes(currentWord)) {
      i--;
    } else {
      words.push(currentWord);
    }
  }
  console.log(words); // for debugging
  printList(words); //prints the new list to the document
  return words;
}

//prints the words to the wordlist
function printList(wordList) {
  for ( let j = 0; j < wordList.length; j++ ) {
    let li = document.createElement('li');
    li.textContent = wordList[j].word;
    ul.appendChild(li);
  }
}

// generate a random number, x = 0-25 and make that card black
function assignDeath () {
  let x = Math.floor(Math.random() * 24);
  words[x].color = "black"
}

function assignRed () {
// generate a random number, x = 0-25
  for (let i = 0; i < 8; i++) {
    let x = Math.floor(Math.random() * 24);
    // check if that word has an assigned color property, if not set .color = red
    if (words[x].color === false) {
      words[x].color = "red";
    // if the word has a color already, reiterate the loop on a different word
    } else {
      i--;
    }
  }
}

// see 'assignRed()' for notes
function assignBlue () {
  for (let i = 0; i < 8; i++) {
    let x = Math.floor(Math.random() * 24);
    if (words[x].color === false) {
      words[x].color = "blue";
    } else {
      i--;
    }
  }
}

// since blue and red are all assigned, make the rest neutral
function assignNeutral() {
  for (let i = 0; i < words.length; i++) {
    if (words[i].color === false) {
      words[i].color = 'neutral';
    }
  }
}

//give all cards a 'data-card-color' property based off the word's colour assignment
function assignWord() {
  for (let i = 0; i < cards.length; i++) {
    let cardContent = document.getElementById('word' + i);
    let currentCard = document.getElementById('card' + i);
    cardContent.textContent = words[i].word;
    currentCard.setAttribute('data-card-color', words[i].color);
  }
}

//strip colours from all cards on resetting the board
function removeColor() {
  for (let i = 0; i < words.length; i++) {
    let currentCard = document.getElementById('card' + i);
    let cardColor = currentCard.getAttribute('data-card-color');
    currentCard.classList.remove(cardColor);
    currentCard.setAttribute('data-card-color', '');
  }
}

// eventListener checks card colours and scores game accordingly
function score() {
  let cardColor = this.getAttribute('data-card-color');
  if (cardColor === 'red') {
    redPoints++;
    redScore.innerHTML = redPoints;
    console.log('RED: ' + redPoints + ' vs. BLUE: ' + bluePoints);
    this.removeEventListener('click', score);
  } 
  else if (cardColor === 'blue') {
    bluePoints++;
    blueScore.innerHTML = bluePoints;
    console.log('RED ' + redPoints + ' vs. BLUE: ' + bluePoints);
    this.removeEventListener('click', score);
  }
}
//   }
// });
// to assign the correct colours to the cards...
// cards.forEach((function() {
// 
// });

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
