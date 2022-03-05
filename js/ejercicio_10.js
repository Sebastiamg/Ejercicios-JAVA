let num = parseInt(prompt("Igrese un número:"));
document.write("Ingrese un numero limite: ",'<br>');
document.write(num,'<br>');
	
cont = 0;
suma = 0;

while (cont<num) {
		cont = cont + 1;
		suma = suma + cont;
}
document.write("la suma de todos los numeros hasta hasta el ",num," es: ",suma);


