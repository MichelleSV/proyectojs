var canciones = new Array(2); 
canciones[0] = "Cancion 1"; 
canciones[1] = "Cancion 2"; 
canciones[2] = "Cancion 3";

var numCancion = Math.floor(Math.random()*3);

document.write("<embed src='Music/" + canciones[numCancion] + ".mid' hidden='false' autostart='true' loop=true>");