function handleKeyEvent() {
  var i = document.getElementById('text-box')
  i.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask()
    }
  })
}


function render() {
  handleKeyEvent()
  renderTodoList()
  renderDoneList()
}

render();
