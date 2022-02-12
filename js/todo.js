const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  saveToDos();
  li.remove();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  {
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    {
      span.innerText = newToDoObj.text;
    }
    li.appendChild(span);

    const button = document.createElement("button");
    {
      button.innerText = "❌";
      button.addEventListener("click", deleteToDo);
    }
    li.appendChild(button);
  }
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDoObj = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();

  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintToDo);
}