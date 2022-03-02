

	var nombre, nota1, nota2, nota3, suma;
	
    alert("ingrese las notas hasta 100 y el nombre dele estudiante");
	document.write("ingrese las notas hasta 100 y el nombre dele estudiante",'<BR/>');

    alert("Nombre del Estudiante");
	document.write("Nombre del Estudiante",'<BR/>');
	nombre = prompt();

    alert("Ingrese 3 Notas del Estudiante");
	document.write("Ingrese las notas del Estudiante",'<BR/>');
	document.write("Nota 1: ");
	nota1 = Number(prompt());
    document.write(nota1,'<br>');

	document.write("Nota 2: ");
	nota2 = Number(prompt());
    document.write(nota2,'<br>');

	document.write("Nota 3: ");
	nota3 = Number(prompt());
    document.write(nota3,'<br>');

	suma = (nota1+nota2+nota3)/3;
	document.write("Su nota final es: ",suma,'<BR/>');
	if (suma<=68) {
		document.write("El estudiante ",nombre," esta Reprobado",'<BR/>');
	}
	if (suma>=70) {
		document.write("El estudiante ",nombre," esta Aprobado",'<BR/>');
	}


