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