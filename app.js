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