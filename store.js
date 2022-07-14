const store = {
  todos: {},
  done: {}
}


function addTask() {
  var text = document.getElementById('text-box').value
  var id = Math.random()
  store.todos[id] = text
  renderList()
}

function getTodoTask(id) {
  return store.todos[id] || {}
}

function getCompletedTask(id) {
  return store.done[id] || {}
}

function deleteTodo(id) {
  delete store.todos[id]
  renderList()
}

function deleteDone(id) {
  delete store.done[id]
  renderList()
}

function toggleCompletedTask(id) {
  if (store.done[id]) {
    store.todos[id] = store.done[id]
    deleteTask('todos', id)
    return
  }
  store.done[id] = store.todos[id]
  deleteTask('done', id)
}

