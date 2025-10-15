// Run after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Alert if input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create task item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task on click
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to task, and task to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on Enter key press
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
