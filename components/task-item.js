function renderElement(id, testo) { 
 return `
  <div>
    <input type="checkbox">  
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
