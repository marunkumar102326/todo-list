const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    span.addEventListener("click", function(){
        span.classList.toggle("done");
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});
