var x = new Number();
var a = new Number();
var b = new Number();
x = 1;
a = 0;
b = 0;
while (x<=100) {
    if (x%2==0) {
        document.write("<p>Numeros multiplos de 2: ",x,'<BR/>');
        a = a + 1;
    }
    if (x%3==0) {
        document.write("Numeros multiplos de 3: ",x,'<BR/>');
        b = b+1;
    }
    x = x+1;
}
document.write("cantidad números pares:",a,'<BR/>');
document.write("cantidad números impares:",b,"</p>",'<BR/>');