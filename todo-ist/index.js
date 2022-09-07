let form = document.getElementById("todo-form");
let formInput = document.querySelector(".form-input");
let todoList = document.querySelector("ul.todo-list");

let localTodos = JSON.parse(localStorage.getItem("todos"));
console.log(localTodos);

if (localTodos){
  // add todos to UI
  localTodos.forEach(todoElement => addTodoToUI(todoElement));
};

function addTodoToUI(todoElement){
 // create a list item to add the todo-item into
 let todoItem = document.createElement("li");
 todoItem.classList.add('todo-item');
 
 if (todoElement.completed) {
  todoItem.classList.add("completed");
 }
 todoItem.innerHTML = todoElement.text; 
 todoList.append(todoItem);
}