window.addEventListener("load", function(){
	var btn = document.getElementById("boton");
	btn.addEventListener("click", function(event){
		event.preventDefault();
// Validar un campo de texto obligatorio //
		var cuadroDeValidacionNombre = document.createElement("span");
		var cuadroDeValidacionEmail = document.createElement("span");
		var cuadroDeValidacionMensaje = document.createElement("span");

		var campoObliInputUno = document.getElementById("input-form1");
		var campoObliInputDos = document.getElementById("input-form2");
		var campoObliTexarea = document.getElementById("textarea-form");

			if (campoObliInputUno.value == null || campoObliInputUno.value == 0 || /^\s+$/.test(campoObliInputUno.value) ) {
			/*	var cuadroNegro = document.getElementsByClassName("input-box")[0];
				cuadroNegro.appendChild(cuadroDeValidacionNombre);
				cuadroDeValidacionNombre.innerHTML = "<strong>Completar los campos</strong>";
				cuadroNegro.classList.add("error");*/
				
				alert("Llenar campo nombre de forma correcta");

			};

			if (campoObliInputDos.value == null || campoObliInputDos.value == 0 || /^\s+$/.test(campoObliInputDos.value) ) {
				alert("Llenar campo correo de forma correcta");
			};

			if (campoObliTexarea.value == null || campoObliTexarea.value == 0 || /^\s+$/.test(campoObliTexarea.value) ) {
				alert("Llenar campo texto de forma correcta");
			};

// Validar un campo de texto nombre solo caracteres nombre//
			if ( /^[a-z][a-z]*/.test(campoObliInputUno.value)==false ) {
				alert ('Nombre no valido'); 
			};

//  Validar una dirección de email//

			if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(campoObliInputDos.value)) ) {
				alert(" Validar una dirección de email");
			}



	});
});