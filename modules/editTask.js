const editTask = (event) => {
    const clicked = event.target.closest('.task_input');
    if (!clicked) return;
    clicked.addEventListener('keyup', () => {
      const task = JSON.parse(localStorage.getItem('task_input')) || [];
      const targetData = parseInt(clicked.getAttribute('data-desc'), 10);
      const editTask = task.find((todo) => todo.index === targetData);
      editTask.description = clicked.value.trim();
      localStorage.setItem('task_input', JSON.stringify(task));
    });
  };

  module.exports = editTask;