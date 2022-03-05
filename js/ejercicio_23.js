var num = new Number();
var contador = new Number();
var suma = new Number();
alert("Ingrese un numero")
document.write("Ingrese un numero",'<BR/>');
num = Number(prompt());
document.write("Numero pares ",'<BR/>');
for (num=num;num<=20;num++) {
    if (num%2==0) {
        document.write(num,'<BR/>');
        contador = contador+2;
        suma = suma+contador;
    }
}
document.write("Suma pares: ",suma,'<BR/>');

