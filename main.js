//Relevant Elements
const choices = document.querySelectorAll(".opt.titleIcons");
const battleButton = document.querySelector(".battle");
const playerWeapon = document.querySelector(".player");
const cpuBox = document.querySelector(".cpu");
const paper = document.getElementById("paper");
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const result = document.getElementById('result');
const results = [];


//Event Listeners
choices.forEach(choice => choice.addEventListener('click', selectWeapon));
battleButton.addEventListener('click', initiateGame);

function selectWeapon() {
  //these constants must be declared AFTER initiating the function
  const a = playerWeapon.getAttribute('class');
  const prevWeapon = a.split(" ")[2];
  const choiceAttributes = this.getAttribute('class');
  const weaponType = choiceAttributes.split(" ")[0];

  //upon clicking any choice, remove 'selection' from previous choice
  while (paper.classList.contains("selection") || scissors.classList.contains("selection") || rock.classList.contains("selection")) {
  removeSelectionClass();
  }
  
  //removes the previous weapon class from the playerWeapon
  if (playerWeapon.classList.length = 3) { 
    playerWeapon.classList.remove(prevWeapon);
    this.classList.toggle("selection");
  }
  
  //checks if the newly clicked weapon is the same as the previous one and just removes the 'selected' class they are equal
  if (weaponType === prevWeapon) {
    playerWeapon.classList.remove(prevWeapon);
    this.classList.toggle("selection");
  } else {
    playerWeapon.classList.toggle(weaponType);
    battleActive();
  }
}

//selected removes the selected CSS from the current active element
function removeSelectionClass() {
  const selected = document.getElementsByClassName("selection")[0];
  selected.classList.toggle("selection");
  //check if battleActive is on and turn it off
  if (battleButton.classList.contains("battleActive")) {
    battleActive();
  }
  if (battleButton.classList.contains("avoidClicks")) {
    clearCpuWeapon();
    result.innerHTML = '';
  }
}

//toggleActive() makes the 'BATTLE!' button clickable
function battleActive() {
    battleButton.classList.toggle("avoidClicks");
    battleButton.classList.toggle("battle");
    battleButton.classList.toggle("battleActive");
}
function initiateGame() {
  if (playerWeapon.classList.length = 3) {
    clearCpuWeapon();
    var x = Math.floor(Math.random() * 3 + 1);
    if (x === 1) {
      cpuBox.classList.toggle("paper");
    } else if (x === 2) {
      cpuBox.classList.toggle("scissors");
    } else {
      cpuBox.classList.toggle("rock");
    }
    paperScissorsRock();
  }
}
//clears the previous weapons from the cpu weapon box
function clearCpuWeapon() {
cpuBox.classList.remove("paper");
cpuBox.classList.remove("scissors");
cpuBox.classList.remove("rock");
}

//get the cpu's weapon and compare it to the player's
function paperScissorsRock () {
  playPaper();
  playScissors();
  playRock();
}

//cpu's possible plays vs player's choices
function playPaper() {
  if (cpuBox.classList.contains("paper"))  {
    // console.log(playerWeapon)
    console.log('paper');
    if (playerWeapon.classList.contains('paper')) {
      result.innerHTML = 'TIE!';
    } else if (playerWeapon.classList.contains('scissors')) {
      result.innerHTML = 'SCISSORS BEATS PAPER, PLAYER WINS!';
    } else if (playerWeapon.classList.contains('rock')) {
      result.innerHTML = 'PAPER BEATS ROCK, CPU WINS!';
    }
  }
}

function playScissors() {
  if (cpuBox.classList.contains("scissors")) {
    if (playerWeapon.classList.contains('paper')) {
      result.innerHTML = 'SCISSORS BEATS PAPER, CPU WINS!';
    } else if (playerWeapon.classList.contains('scissors')) {
      result.innerHTML = 'TIE!';
    } else if (playerWeapon.classList.contains('rock')) {
      result.innerHTML = 'ROCK BEATS SCISSORS, PLAYER WINS!';
    }
  }
}

function playRock() {
  if (cpuBox.classList.contains("rock")) {
    if (playerWeapon.classList.contains('paper')) {
      result.innerHTML = 'PAPER BEATS ROCK, PLAYER WINS!';
    } else if (playerWeapon.classList.contains('scissors')) {
      result.innerHTML = 'ROCK BEATS SCISSORS, CPU WINS!';
    } else if (playerWeapon.classList.contains('rock')) {
      result.innerHTML = 'TIE!';
    }
  }
}

function storeResults(results) {

}