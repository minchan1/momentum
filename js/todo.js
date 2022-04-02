const ToDoForm = document.getElementById("todo-form");
const ToDoList = document.getElementById("todo-list");
const ToDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let ToDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    ToDos = ToDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button); 
    ToDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = ToDoInput.value;
    ToDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    ToDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

ToDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    ToDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // parsedToDos.forEach((item)=>console.log(`Test ${item}`));
}