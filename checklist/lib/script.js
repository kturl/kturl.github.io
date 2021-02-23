
// LEARN HOW TO STORE THE LIST EVEN AFTER EXITING SITE
//MAYBE STORE/RETRIEVE THE DATA FROM A GOOGLE SHEETS DOCUMENT?
const submitButton = document.getElementById('submitButton');
const clearButton = document.getElementById('clearButton');
const userInput = document.getElementById('userInput');
let ul = document.getElementById('list');
// const itemClickable = document.querySelectorAll('.item');
let todoList = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now()
  };
  todoList.push(todo);
  renderTodo(todo);
}

function toggleDone(key) {
  const index = todoList.findIndex(item => item.id === Number(key));
  todoList[index].checked = !todoList[index].checked;
  renderTodo(todoList[index]);
}

function removeTodo(key) {
  const index = todoList.findIndex(item => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoList[index]
  }
  todoList = todoList.filter(item => item.id !== Number(key));
  renderTodo(todo);
}

const form = document.getElementById('myForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (text !== '') {
    addTodo(text);
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
}
clearButton.addEventListener('click', clearList);