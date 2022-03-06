var digito, pago, tiempo;
	var clave = new Number();

    alert("Escoja la clave hacia a donde llama:");
    alert(
    "(1) - 0.15$ por minuto - Estados Unidos                                                   (2) - 0.14$ por minuto - Canada                                                                (3) - 0.25$ por minuto - España                                                                (4) - 0.05$ por minuto - Colombia                                                            (5) - 0.10$ por minuto - Venezuela                                                             (6) - 0.11$ por minuto - Mexico                                                              (7) - 0.12$ por minuto - Argentina                                                             (8) - 0.08$ por minuto - Panama");
    
	document.write("<p>Escoja la clave hacia a donde llama:",'<BR/>');
	document.write("(1) - 0.15$ por minuto - Estados Unidos ",'<BR/>');
	document.write("(2) - 0.14$ por minuto - Canada",'<BR/>');
	document.write("(3) - 0.25$ por minuto - España",'<BR/>');
	document.write("(4) - 0.05$ por minuto - Colombia",'<BR/>');
	document.write("(5) - 0.10$ por minuto - Venezuela",'<BR/>');
	document.write("(6) - 0.11$ por minuto - Mexico",'<BR/>');
	document.write("(7) - 0.12$ por minuto - Argentina",'<BR/>');
	document.write("(8) - 0.08$ por minuto - Panama",'<BR/>');
	digito = Number(prompt("CODIGO: "));
	
	switch (digito) {
	case 1:
		document.write("¿Cuantos minutos duro la llamada?",'<BR/>');
		tiempo = Number(prompt("Tiempo de la LLAMADA: "));
		pago = 0.15*tiempo;
		document.write("Su total a pagar es de: ",pago,"$",'<BR/>');
		break;
	case 2:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempo = Number(prompt("Tiempo de la LLAMADA: "));
		pago = 0.14*tiempo;
		document.write("Su total a pagar es de: ",pago,"$",'<BR/>');
		break;
	case 3:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempo = Number(prompt("Tiempo de la LLAMADA: "));
		pago = 0.25*tiempo;
		document.write("Su total a pagar es de: ",pago,"$",'<BR/>');
		break;
	case 4:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempo = Number(prompt("Tiempo de la LLAMADA: "));
		pago = 0.05*tiempo;
		document.write("Su total a pagar es de: ",pago,"$",'<BR/>');
		break;
	case 5:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempo = Number(prompt("Tiempo de la LLAMADA: "));
		pago = 0.10*tiempo;
		document.write("Su total a pagar es de: ",pago,"$",'<BR/>');
		break;
	case 6:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempo = Number(prompt("Tiempo de la LLAMADA: "));
		pago = 0.11*tiempo;
		document.write("Su total a pagar es de: ",pago,"$",'<BR/>');
		break;
	case 7:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempo = Number(prompt("Tiempo de la LLAMADA: "));
		pago = 0.12*tiempo;
		document.write("Su total a pagar es de: ",pago,"$",'<BR/>');
		break;
	case 8:
		document.write("¿Cuanto duro la llamada?",'<BR/>');
		tiempo = Number(prompt("Tiempo de la LLAMADA: "));
		pago = 0.08*tiempo;
		document.write("Su total a pagar es de: ",pago,"$",'<BR/>');
		break;
	default:
		document.write("Digito incorrecto, ingrese nuevamente.</p>",'<BR/>');
	}