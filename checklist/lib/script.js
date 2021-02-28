
// LEARN HOW TO STORE THE LIST EVEN AFTER EXITING SITE
//MAYBE STORE/RETRIEVE THE DATA FROM A GOOGLE SHEETS DOCUMENT?
const submitButton = document.getElementById('submitButton');
const staplesButton = document.getElementById('staplesButton');
const clearButton = document.getElementById('clearButton');
const userInput = document.getElementById('userInput');
const ul = document.getElementById('list');
const sl = document.getElementById('sideList');

let todoList = [];
const staples = ['spinach', 'lettuce', 'peppers', 'onions', 'garlic', 'apples', 'bananas', 'limes', 'bread', 'tortillas', 'english muffins', 'bacon', 'beef', 'chicken', 'cheese', 'cottage cheese', 'sour cream', 'yogurt', 'eggs', 'frozen fruit/veggie', 'beans', 'tomato paste'];
let savedTodos;

function store() {
  savedTodos = JSON.stringify(todoList);
  localStorage.setItem('todoList', savedTodos);
}

function addTodo(text) {
  // text.toLowerCase();
  const todo = {
    text,
    checked: false,
    id: Math.ceil(Math.random() * 1000000)
  };
//avoid doubles by using todoList.map() to get an array of just the text property and check if the new item is present
  let items = todoList.map(a => a.text);
//if it is not present, add it to the list
  if (!items.includes(todo.text)) {
    todoList.push(todo);
    renderTodo(todo);
    store();
  }
}

staplesButton.addEventListener('click', addStaples);
function addStaples() {
  for (let i = 0; i < staples.length; i++) {
    addTodo(staples[i]);
  }
  // staples.forEach(item => addTodo(item));
  // userInput.focus();
}

function toggleDone(key) {
  const index = todoList.findIndex(item => item.id === Number(key));
  todoList[index].checked = !todoList[index].checked;
  renderTodo(todoList[index]);
  store();
}

function removeTodo(key) {
  const index = todoList.findIndex(item => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoList[index]
  }
  todoList = todoList.filter(item => item.id !== Number(key));
  renderTodo(todo);
  store();
}

const form = document.getElementById('myForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (text !== '') {
    addTodo(text.toLowerCase());
    userInput.value = '';
    userInput.focus();
  }
});

function renderTodo(todo) {
  const isChecked = todo.checked ? 'done' : '';
  const item = document.querySelector(`[data-key='${todo.id}']`);
  let li = document.createElement('li');
  li.setAttribute('class', `item ${isChecked}`);
  li.setAttribute('data-key', todo.id);
  li.innerHTML = `
  <div id="${todo.id}" class="itemButton checkBox"></div>
  <span class="item">${todo.text}</span>
  <div id="delete${todo.id}" class="itemButton delete">X</div>
  `;
  if (todo.deleted) {
    item.remove();
    if (todoList.length === 0)
      list.innerHTML = '';
    return;
  }
  if (item) {
    ul.replaceChild(li, item);
  } else {
    ul.append(li);
  }
}
ul.addEventListener('click', e => {
  if (e.target.classList.contains('checkBox')){
    const itemKey = e.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
});
ul.addEventListener('click', e => {
  if (e.target.classList.contains('delete')){
    const itemKey = e.target.parentElement.dataset.key;
    removeTodo(itemKey);
  }
});

function clearList() {
  ul.innerHTML = '';
//setting the array.length to 0 clears it easily. Could otherwise .splice(0, array.length). Both are similar in performance.
  todoList.length = 0;
  store();
}
clearButton.addEventListener('click', clearList);

window.addEventListener('load', () => {
  const ref = localStorage.getItem('todoList');
  if (ref) {
    savedTodoList = JSON.parse(ref);
    savedTodoList.forEach(todo => {
      let items = todoList.map(a => a.text);
      if (!items.includes(todo.text)) {
        todoList.push(todo);
        renderTodo(todo);
      }
    });
  }
});
//ADD SHOW/NOT SHOW BUTTON FOR 'STAPLES' LIST
//ADD FUNCTION TO SORT BY FOOD TYPE (add property)