window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const listEl = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value) {
      alert('Please enter');
    }
    const taskEl = document.createElement('div');
    taskEl.classList.add('task');

    const taskContentEl = document.createElement('div');
    taskContentEl.classList.add('content');

    taskEl.appendChild(taskContentEl);

    const taskInputEL = document.createElement('input');
    taskInputEL.classList.add('text');
    taskInputEL.type = 'text';
    taskInputEL.value = input.value;
    taskInputEL.setAttribute('readonly', 'readonly');

    taskContentEl.appendChild(taskInputEL);

    const taskActionsEl = document.createElement('div');
    taskActionsEl.classList.add('actions');

    const taskEditEl = document.createElement('button');
    taskEditEl.classList.add('edit');
    taskEditEl.innerHTML = 'Edit';

    const taskDeleteEl = document.createElement('button');
    taskDeleteEl.classList.add('delete');
    taskDeleteEl.innerHTML = 'Delete';

    taskActionsEl.appendChild(taskEditEl);
    taskActionsEl.appendChild(taskDeleteEl);

    taskEl.appendChild(taskActionsEl);

    listEl.appendChild(taskEl);

    input.value = '';

    taskEditEl.addEventListener('click', () => {
      if (taskEditEl.innerText.toLowerCase() === 'edit') {
        taskInputEL.removeAttribute('readonly');
        taskInputEL.focus();
        taskEditEl.innerText = 'Save';
      } else {
        taskInputEL.setAttribute('readonly','readonly');
        taskEditEl.innerText = 'Edit';
      }
    });

    taskDeleteEl.addEventListener('click', () => {
      listEl.removeChild(taskEl);
    });

  });
});
