
	var notas = new Number();
	var suma = new Number();
	var prom = new Number();
	var n = new Number();
	acum = 1;
	suma = 0;
	document.write("<p>Ingrese el número de notas que desea promediar ",'<BR/>');
	notas = Number(prompt("Ingrese el número de notas que desea promediar "));
	while (acum<=notas) {
		n = Number(prompt("Ingrse la nota"));
        document.write("Nota ",acum," = ",n,'<BR/>');
		suma = suma+n;
		acum = acum+1;
	}
	prom = suma/notas;
	document.write("Su promedio es : ",prom,'<p>');

