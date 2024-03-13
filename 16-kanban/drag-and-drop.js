const tasks = document.querySelectorAll(".tasks li");
let draggedTask = null;

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];

  // dragstart pegando conteudo que esta sendo transferido por meio dessa task
  task.addEventListener("dragstart", function (event) {
    draggedTask = task;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", task.innerHTML); // copiamos de algum lugar
    task.classList.add("dragging");
  });

  // dragend quando o usuario termina
  task.addEventListener("dragend", function () {
    draggedTask.classList.remove("dragging");
    draggedTask = null;
  });
}

const columns = document.querySelectorAll(".tasks");

for (let i = 0; i < columns.length; i++) {
  const column = columns[i];

  // dragover quando colocamos algo que esta sendo arrastado pra ele
  column.addEventListener("dragover", function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    column.classList.add("dragover");
  });

  // removendo a classe
  column.addEventListener("dragleave", function () {
    column.classList.remove("dragover");
  });

  // drop quando coloca fixa na proxima coluna
  column.addEventListener("drop", function (event) {
    event.preventDefault();
    const task = document.createElement("li");

    task.innerHTML = event.dataTransfer.getData("text/html");
    task.setAttribute("draggable", true);
    task.addEventListener("dragstart", function (event) {
      draggedTask = task;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/html", task.innerHTML); // soltamos a tarefa colando em algum lugar
      task.classList.add("dragging");
    });

    column.appendChild(task);
    column.classList.remove("dragover");

    // Remove task from previous column
    const previousColumn = draggedTask.parentNode;
    previousColumn.removeChild(draggedTask);
  });
}