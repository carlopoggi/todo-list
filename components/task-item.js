function renderElement() {
 let testo = document.getElementById("text-box").value

 return `
  <div>
    <div>   
      <input type="checkbox" id="fatto" name="fatto">
      <label for="fatto">Fatto?</label>
    </div>  
    <p> ${testo} </p>
  </div>
` 
}
