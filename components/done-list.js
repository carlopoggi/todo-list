function renderDoneList() {
  const { done } = store
  const keys = Object.keys(done) 
  const lista = document.getElementById('lista-done')
  lista.innerHTML = ''

  const doneList = keys.map((id) => {
    const testo = store.done[id]
    return renderCompleted(id, testo)
  })
  lista.innerHTML = doneList.join('')
}