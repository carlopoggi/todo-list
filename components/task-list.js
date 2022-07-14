function renderList () {
  const { todos } = store
  const keys = Object.keys(todos) 
  const lista = document.getElementById('lista')
  lista.innerHTML = ''
  // TODO render todo list

  const todoList = keys.map((id) => {
    const testo = store.todos[id]
    return renderElement(id, testo)
  })
  lista.innerHTML = todoList.join('')
}