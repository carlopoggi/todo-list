
function renderCompleted(id, testo) { 
  return`
   <div class='flex'>
     <input type="checkbox" onclick='toggleTask(${id})' checked>  
     <p> ${testo} </p> 
     <button
       type='button'
       class='delete'
       onclick='deleteTodo(${id})'
     >
       x
     </button>
   </div>
 ` 
 }
 
