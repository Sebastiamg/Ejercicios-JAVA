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
    document.write("<p>El numero ",numero," es palindromo",'</p><BR/>');
} else {
    document.write("<p>El numero ",numero," no es palindromo",'</p><BR/>');
}

