let num = parseInt(prompt("Ingrese un número límite"));

suma = 0;

for (let cont = 0; cont <= num; cont++) {
    suma = suma + cont;
    
}

document.write("La suma de todos los números del 0 al ",num," es: ",suma);