
let nomb = prompt("Ingrese el nombre del estudiante");
	document.write("<p>Ingrese el nombre del estudiante",'<BR/>');
    document.write(nomb,'<br>')

let nota = parseInt(prompt("Ingrese la nota del estudiante"));
	document.write("Ingrese el nombre del estudiante",'<BR/>');
    document.write(nota,'<br>')


	if (nota>=0 && nota<=2) {
		document.write("El estudiante ",nomb," necesita reforzamiento",'<BR/>');
	} else {
		if (nota>=3 && nota<=4) {
			document.write("El estudiante ",nomb," esta desaprobado",'<BR/>');
		} else {
			if (nota>=5 && nota<=7) {
				document.write("El estudiante ",nomb," esta aprobado",'<BR/>');
			} else {
				if (nota>=8 && nota<=9) {
					document.write("El estudiante ",nomb," tiene un promedio exelente",'<BR/>');
				} else {
					if (nota==10) {
						document.write("El estudiante ",nomb," Esta becado",'<BR/>');
					} else {
						document.write("ERROR: Ingrese una nota del 0 al 10.</p>",'<BR/>');
					}
				}
			}
		}
	}


