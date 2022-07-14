function renderList() {
  const { todos } = store
  const keys = Object.keys(todos) 
  const lista = document.getElementById('lista-todo')
  lista.innerHTML = ''

  const todoList = keys.map((id) => {
    const testo = store.todos[id]
    return renderElement(id, testo)
  })
  lista.innerHTML = todoList.join('')
}