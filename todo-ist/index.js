let form = document.getElementById("todo-form");
let formInput = document.querySelector(".form-input");
let todoList = document.querySelector("ul.todo-list");

let localTodos = JSON.parse(localStorage.getItem("todos"));

if (!localTodos){
  // create a default value if it dont exist in the storage
  localTodos = [];
  localStorage.setItem("todos", JSON.stringify(localTodos)) 
}

form.addEventListener('submit', function(event){
  event.preventDefault();

  // get the text the user input 
  formInputValue = formInput.value;
  // set the input value back to empty
  if (formInputValue !== '') {
    formInput.value = '';
    addTodoItem(formInputValue)
  }
})

const addTodoItem = (todoText) =>{
  // create a list item to add the todo-item into
  let todoItem = document.createElement("li");
  todoItem.classList.add('todo-item');
  todoItem.innerHTML = todoText;
  todoList.append(todoItem);
  
  todoMap = {
    "todo": todoText,
    "completed": todoItem.classList.contains("completed"),
  }
  localTodos.push(todoMap);
  console.log(todoMap);
  localStorage.setItem("todos", JSON.stringify(localTodos));

  todoItem.addEventListener('click', function(event){
    todoItem.classList.toggle('completed');
    
    // update todoItem complete state from localStorage
    // todoMap = {
    //   "todo": todoText,
    //   "completed": todoItem.classList.contains("completed"),
    // }
    // localTodos.push(todoMap);
    // console.log(todoMap);
    // localStorage.setItem("todos", JSON.stringify(localTodos));
  });
  
  todoItem.addEventListener('contextmenu', function(event){
    event.preventDefault();
    todoItem.remove()
    // TODO: remove element from localstorage 
  });
};