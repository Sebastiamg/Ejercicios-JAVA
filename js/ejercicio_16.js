
var numpares = new Number();
var numimpares = new Number();
var contador = new Number();
num = Number(prompt("Ingrese un número:"));
document.write("<p>INGRSE UNA NUMERO: ",num,'<BR/>');
numpares = 0;
numimpares = 0;
	for (contador=1;contador<=num;contador++) {
		if (contador%2==0) {
			numpares = contador+numpares;
		} else {
			numimpares = contador+numimpares;
		}
	}
document.write("Suma de pares es : ",numpares,'<BR/>');
document.write("Suma de impares es : ",numimpares,'<p>');