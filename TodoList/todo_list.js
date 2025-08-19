// Array to store tasks
let tasks = [];

// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); // include completed property
        taskInput.value = "";
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>
        `;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to clear completed tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Initial display
displayTasks();
