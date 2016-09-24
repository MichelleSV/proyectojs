window.onload = function () {
	var frase =document.getElementById("frase");
	frase.addEventListener("mouseover", function() {
			frase.innerHTML =" diversión en los mejores eventos organizados por nosotros"
	});		
	frase.addEventListener("mouseout", function() {
			frase.innerHTML ="Entretenimiento en música electrónica.."
	});	
	var imagenes = document.getElementById("imagenes");
	var bloque=document.getElementById("bloque");
	var bloque2=document.getElementById("bloque2");
	var bloque3=document.getElementById("bloque3");
	var bloque4=document.getElementById("bloque4");
		
	imagenes.addEventListener("mouseover", function() {
			bloque.classList.add("no");
			bloque2.classList.remove("no"); 
			bloque3.classList.add("no");
			bloque4.classList.remove("no"); 

	});
	imagenes.addEventListener("mouseout", function() {
			bloque.classList.remove("no");
			bloque2.classList.add("no"); 
			bloque3.classList.remove("no");
			bloque4.classList.add("no"); 
	});

	imagenes.addEventListener("touchstar", function() {
			bloque.classList.add("no");
			bloque2.classList.remove("no"); 
			bloque3.classList.add("no");
			bloque4.classList.remove("no"); 

	});
	imagenes.addEventListener("touchend", function() {
			bloque.classList.remove("no");
			bloque2.classList.add("no"); 
			bloque3.classList.remove("no");
			bloque4.classList.add("no"); 
	});

}