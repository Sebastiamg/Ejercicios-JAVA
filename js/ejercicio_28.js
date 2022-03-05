var a, num, numero;

alert("Escribe un numero palidromo")
a = 0;
numero = prompt();
num = numero;
do {
    a = (a*10)+(num%10);
    num = Math.trunc(num/10);
} while (num!=0);
if (a==numero) {
    document.write("El numero ",numero," es palindromo",'<BR/>');
} else {
    document.write("El numero ",numero," no es palindromo",'<BR/>');
}

