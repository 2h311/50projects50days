let form = document.getElementById("todo-form");
let formInput = document.querySelector(".form-input");
let todoList = document.querySelector("ul.todo-list");
let localTodos = JSON.parse(localStorage.getItem("todos"));

if (localTodos) localTodos.forEach(todoElement => addTodoToUI(todoElement));

function addTodoToUI(todoElement){
  // create a list item to add the todo-item into
  let todoItem = document.createElement("li");
  todoItem.classList.add('todo-item');
 
  if (todoElement.completed) todoItem.classList.add("completed");
  todoItem.innerHTML = todoElement.text; 
  todoList.append(todoItem);

  // click - completed
  todoItem.addEventListener('click', function(event){
    todoItem.classList.toggle('completed');
    updateTodoInUIToSessionStorage();
  });

  // contextmenu - right click
  todoItem.addEventListener('contextmenu', function(event){
    event.preventDefault();
    todoItem.remove()
    updateTodoInUIToSessionStorage();
  });

  // update local storage after adding a new todo
  updateTodoInUIToSessionStorage();
}


form.addEventListener('submit', function(event){
  event.preventDefault();

  // get the text the user input 
  formInputValue = formInput.value;
  // set the input value back to empty
  if (formInputValue !== '') {
    addTodoToUI({
      "text": formInputValue,
      "completed": false,
    });
    formInput.value = '';
  }
})


function updateTodoInUIToSessionStorage(){
  todos = Array();
  todoList.childNodes.forEach((todo) =>{
    console.log(todo);
    todos.push({
      "text": todo.innerText,
      "completed": todo.classList.contains('completed'),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
