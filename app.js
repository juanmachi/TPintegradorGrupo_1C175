function resetform() {
  //Limpia los campos 
  $("form input[type=email]").each(function() { this.value = '' });
  $("form input[type=text] , form textarea ").each(function() { this.value = '' });
}
function enfocar()
{ 
//Coloca el cursor en los input
const $btnEnfocar = document.querySelector("#btnEnfocar"),
$nombre = document.querySelector("#nombre");

// En el click, enfocar
$btnEnfocar.addEventListener("click", () => {
$nombre.focus();
});

}
function imprimir() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;
  
    console.log("Nombre: " + nombre);
    console.log("email: " + email);
    console.log("comentario: " + comentario);
    //alert('Los datos se enviaron correctamente');
    resetform();
    enfocar();
}
 //validacion antes de llamar api delclima

  
// Esta función validará Nombre de la ciudad.
function allLetter()
{ 
var unom = document.getElementById("city")
var letras = /^[\sA-Za-z]+$/;
//const  espacio=/^ \s+$/;
console.log(unom.value);
if (unom.value.match(letras))
{ //console.log("entro");
  //alert('ciudad ingresada correctamente');

    
return true;
}
else
{ 
 alert('La ciudad solo debe tener solo caracteres alfabéticos');
 resetinp();
 enfocar1();
return false;
}
}
//funciones que limpia el input y coloca el foco
function resetinp() {
  //Limpia el campo
 
 $("label input[type=text]  ").each(function() { this.value = '' });
// $("label input[type=text]  ").value = '';
}
function enfocar1()
{ 
//Coloca el cursor en el input
const $btnEnfocar2 = document.querySelector("#bot2"),
$nom6 = document.querySelector("#city");

// En el click, enfocar
$btnEnfocar2.addEventListener("click", () => {
$nom6.focus();
});

}
   
//api de clima
function clima() {
    let ciudad = $("input")[0].value;
  
    $.getJSON(
      "https://api.openweathermap.org/data/2.5/weather?lang=es&q=" +
        ciudad +
        "&appid=dcec7df661b1e6b0edab51d796b7339c",
      function (data) {
        console.log(data);
  
        document.getElementById("ciudad").textContent = data.name;
        document.getElementById("grados").textContent =
          "Grados: " + parseInt(data.main.temp - 273.15);
        document.getElementById("imgIco").setAttribute( "src",  `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` );
        document.getElementById("clima").textContent = data.weather[0].description ;
      }
    );
   
  }
  
  document.querySelector("button").addEventListener("click", function () {
   
    clima();
    resetinp();
    enfocar1();
  });

 