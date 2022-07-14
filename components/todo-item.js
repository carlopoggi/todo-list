function renderElement(id, testo) { 
 return `
  <div class='flex'>
    <input type="checkbox" onclick='toggleTask(${id})'>  
    <p> ${testo} </p> 
    <button
      class='delete'
      type='button'
      onclick='deleteTodo(${id})'
    >
      x
    </button>
  </div>
` 
}
