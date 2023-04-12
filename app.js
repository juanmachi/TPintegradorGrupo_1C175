function imprimir() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;
  
    console.log("Nombre: " + nombre);
    console.log("email: " + email);
    console.log("comentario: " + comentario);
    resetform();
    enfocar();
}
   
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
//api
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

  function resetinp() {
    //Limpia los campos 
   
    $("label input[type=text]  ").each(function() { this.value = '' });
}
function enfocar1()
{ 
//Coloca el cursor en los input
const $btnEnfocar2 = document.querySelector("#bot2"),
$nom6 = document.querySelector("#city");

// En el click, enfocar
$btnEnfocar2.addEventListener("click", () => {
$nom6.focus();
});

}