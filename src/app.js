// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Events Listeners
todoButton.addEventListener('click', addTodo);

// Functions
function addTodo(event) {
  event.preventDefault();

  // Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.append(completedButton);

  // Check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTMl = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('completed-btn');
  todoDiv.append(trashButton);

  // Append to list
  todoList.appendChild(todoDiv);
}
