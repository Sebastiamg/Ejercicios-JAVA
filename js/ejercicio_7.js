var letra;
	
alert("Ingresa una letra y te dire si es consonante o vocal");
letra = prompt();
document.write("<p>Ingrese la letra: ",letra,'<BR/>');
switch (letra) {
case "a": case "A":
	document.write("Es una vocal");
	break;
case "e": case "E":
	document.write("Es una vocal");
	break;
case "i": case "I":
	document.write("Es una vocal");
	break;
case "o": case "O":
	document.write("Es una vocal");
	break;
case "u": case "U":
	document.write("Es una vocal");
	break;
default:
	document.write("Es una consonante</p>",'<BR/>');
}