function renderElement(id, testo) { 
 return `
  <div>
    <input type="checkbox" onclick='toggleTask(${id})'>  
    <p> ${testo} </p> 
    <button
      type='button'
      onclick='deleteTodo(${id})'
    >
      cancella
    </button>
  </div>
` 
}
