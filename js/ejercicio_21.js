
var m;
var n = new Number();
var inv = new Number();
var n1 = new Number();
do {
	document.write("Ingrese el numero de 4 o 5 cifras",'<BR/>');
	n = Number(prompt("Ingrse un numero de 4 o 5"));
	n1 = n;
	inv = 0;
	do {
		inv = (inv*10)+(n%10);
		n = Math.trunc(n/10);
	} while (n>0);
	document.write(inv,'<BR/>');
	if (inv==n1) {
		alert("El numero es palindromo");
	} else {
		alert("El numero no es palindromo");
	}
} while (m!="n");

