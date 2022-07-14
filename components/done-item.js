
function renderCompleted(id, testo) { 
  return`
   <div>
     <input type="checkbox" checked>  
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
 
