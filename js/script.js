// console.log("Online"); 

// PASO 1: Seleccionar elementos

var text = document.getElementById("texto");

var muestra = document.getElementById("muestra")

var range = document.getElementById("valor")

var tamano = document.getElementById("tamano")

var valor = document.getElementById("valor")

var fuente = document.getElementById("fuente") 


// PASO 2: texto en vivo

texto.addEventListener("input", function() {

   if (texto.value === "") {
      muestra.textContent = "El veloz murciélago hindú"
   

   } else {
      muestra.textContent = texto.value;

   } 
   
})


// PASO 3: deslizador



tamano.addEventListener("input", function () {

   muestra.style.fontSize = tamano.value + "px";

// Acedemos al contenido de texto de valor y lo igualamos al valor de tamaño
   valor.textContent = tamano.value + "px";
})


// PASO 4: tipografia (font-family)

fuente.addEventListener("change", function() {
   muestra.style.fontFamily = fuente.value;
})

// EXTRA

// COLOR
// En html necesitamos un elemento <input type="color">
// NEGRITA


// SUPEREXTRA HACER RESET



