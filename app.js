var taskList = [];

var userInput = document.getElementById("input");

var todoListElement = document.getElementById("todolist");

document.getElementById("button").onclick = addTask;

function addTask() {
  taskList.push(userInput.value);
  console.log(taskList);
  userInput.value = "";
  displayTasks();
}

function displayTasks() {
  todoListElement.innerHTML = "";

  taskList.forEach(function (task, index) {
    todoListElement.innerHTML +=
      "<li>" +
      task +
      "<a onclick='modifyTask(" +
      index +
      ")'>Edit</a>" +
      "<a onclick='removeTask(" +
      index +
      ")'>&times; | </a></li>";
  });
}

function removeTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}

function modifyTask(index) {
  var newTaskValue = prompt("Please insert your new value");
  taskList.splice(index, 1, newTaskValue);
  displayTasks();
}
