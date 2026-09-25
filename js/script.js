// console.log("Online"); 

// PASO 1: Seleccionar elementos

var text = document.getElementById("texto");

var muestra = document.getElementById("muestra")


// PASO 2: texto en vivo

texto.addEventListener("input", function() {

   if (texto.value === "") {
      muestra.textContent = "El veloz murciélago hindú"
   

   } else {
      muestra.textContent = texto.value;

   } 
   
})