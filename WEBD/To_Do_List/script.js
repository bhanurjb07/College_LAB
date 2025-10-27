const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTodo();
});

function addTodo() {
    const task = input.value.trim();
    if (task === '') return;
    const li = document.createElement('li');
    li.className = 'todo-item';
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = task;

    span.addEventListener('click', function() {
        span.classList.toggle('done');
    });

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = '✖';
    delBtn.addEventListener('click', function() {
        list.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = '';
}
