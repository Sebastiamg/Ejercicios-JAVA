
	var i, nota, promedio, suma;

    suma = 0;
    promedio = 0;

    nom = prompt("Nombre del estudiante");
	document.write("<p>Nombre del estudiante: ",nom,'<BR/>');
	
    let not = parseInt(prompt("Número de notas del estudiante: "));

	for (i=1 ; i<=not ; i++) {
		nota = parseInt(prompt("Nota "+i+":"));
        document.write("Nota N",i," : ",nota,'<br>');
		nota = nota;
		suma = (suma+nota);
		promedio = (suma/not);
	}
	document.write("-------------------------------------",'<BR/>');
	document.write("La suma de las notas es: ",(suma),'<BR/>');
	document.write("-------------------------------------",'<BR/>');
	document.write("El promedio del estudiante es ",promedio,'<BR/><p>');