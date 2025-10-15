document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save
  }

  // Save tasks to Local Storage
  function saveTasks() {
    const tasks = [];
    const items = taskList.querySelectorAll('li');
    items.forEach(item => {
      const text = item.firstChild.textContent.trim();
      tasks.push(text);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Add a new task
  function addTask(taskText, save = true) {
    if (!taskText || taskText.trim() === '') {
      alert('Please enter a task.');
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = function () {
      taskList.removeChild(li);
      saveTasks(); // Update Local Storage after removal
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
      saveTasks(); // Update Local Storage after addition
    }

    taskInput.value = '';
  }

  // Add task on button click
  addButton.addEventListener('click', function () {
    addTask(taskInput.value);
  });

  // Add task on Enter key press
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
    }
  });

  // Load tasks on page load
  loadTasks();
});
