const groceryList = [];
const submitButton = document.getElementById('submitButton');
const clearButton = document.getElementById('clearButton');
const userInput = document.getElementById('userInput');
let ul = document.getElementById('list');

function addNewItem() {
  let li = document.createElement('li');
  if (userInput.value != '') {
    li.className = 'item';
    li.textContent = userInput.value;
    ul.appendChild(li);
    groceryList.push(userInput.value);
    li.addEventListener('click', markComplete);
    userInput.focus();
  }
  userInput.value = '';
}
function markComplete() {
  this.classList.toggle('checked');
}

function clearList() {
  ul.innerHTML = '';
}

submitButton.addEventListener('click', addNewItem);
clearButton.addEventListener('click', clearList);
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addNewItem();
  }
});
