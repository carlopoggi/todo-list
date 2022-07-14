const store = {
  todos: {},
  done: {}
}


function addTask() {
  var text = document.getElementById('text-box')
  const { value } = text
  if (!value) {
    return
  }
  var id = Math.random()
  store.todos[id] = value
  text.value = ''
  renderTodoList()
}

function getTodoTask(id) {
  return store.todos[id] || {}
}

function getCompletedTask(id) {
  return store.done[id] || {}
}

function deleteTodo(id) {
  delete store.todos[id]
  renderTodoList()
}

function deleteDone(id) {
  delete store.done[id]
  renderDoneList()
}

function toggleTask(id) {
  if (store.done[id]) {
    store.todos[id] = store.done[id]
    renderTodoList()
    deleteDone(id)
    return
  } else {
    store.done[id] = store.todos[id]
    renderDoneList()
    deleteTodo(id)
  }
}

