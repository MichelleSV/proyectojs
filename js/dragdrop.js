function DragDrop(drag, drop){
	var drag = document.getElementById(drag);
	var drop = document.getElementById(drop);
	drag.ondragstart = function(e){
	//Guardamos el id del elemento para transferirlo al elemento drop
	//Content es una clave que nos permitirá acceder al valor asignado
	e.dataTransfer.setData("content", e.target.id);
	}
	drop.ondragover = function(e){
		//Cancelar el evento que impide que podamos soltar el elemento drag
		e.preventDefault();
	}
	drop.ondrop = function(e){
		//Obtenemos los datos a través de la clave content, en este caso el id
		var id = e.dataTransfer.getData("content");
		e.target.appendChild(document.getElementById(id));
		var parrafo = document.getElementById("parrafo");
		parrafo.style.display="none";
		
    }
};
	DragDrop("drag1", "drop");
	DragDrop("drag2", "drop");
	DragDrop("drag3", "drop");
	DragDrop("drag4", "drop");
	DragDrop("drag5", "drop");
	DragDrop("drag6", "drop");