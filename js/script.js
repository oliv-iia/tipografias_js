// console.log("Online"); 

// PASO 1: Seleccionar elementos

var text = document.getElementById("texto");

var muestra = document.getElementById("muestra")

var range = document.getElementById("tamano")

var tamano = document.getElementById ("valor")


// PASO 2: texto en vivo

texto.addEventListener("input", function() {

   if (texto.value === "") {
      muestra.textContent = "El veloz murciélago hindú"
   

   } else {
      muestra.textContent = texto.value;

   } 
   
})


// PASO 3: deslizador

// console.log("s");

tamano.addEventListener("input", function () {

   if (tamano.value < "48px") {
       


   }
   
   else {
      muestra.fontSize = tamano.value

   }
})
