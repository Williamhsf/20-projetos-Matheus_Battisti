const tasks = document.querySelectorAll(".tasks li");
let draggedTask = null;

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];

  // pegando conteudo que esta sendo transferido por meio dessa task
  task.addEventListener("dragstart", function (event) {
    draggedTask = task;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", task.innerHTML);
    task.classList.add("dragging");
  });
}