var a, b, c, num1, num2, num3;

alert("Ingrese 3 números.")
document.write("Ingrese 3 números.",'<BR/>');
num1 = prompt();
num2 = prompt();
num3 = prompt();
if ((num1>=num2) && (num1>=num3)) {
    if (num2>=num3) {
        b = num2;
        c = num3;
    } else {
        b = num3;
        c = num2;
    }
    document.write("El numero intermedio es: ",b,'<BR/>');
}
if ((num2>=num1) && (num2>=num3)) {
    a = num2;
    if (num1>=num3) {
        b = num1;
        c = num3;
    } else {
        b = num3;
        c = num1;
    }
    document.write("El numero intermedio es: ",b,'<BR/>');
}
if ((num3>=num1) && (num3>=num2)) {
    a = num3;
    if (num1>=num2) {
        b = num1;
        c = num2;
    } else {
        b = num2;
        c = num3;
    }
    document.write("El numero intermedio es: ",b,'<BR/>');
}