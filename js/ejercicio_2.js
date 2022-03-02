let nota1, nota2, nota3, promedio
nota1 = Number(prompt("Ingrese la nota 1"));
nota2 = Number(prompt("Ingrese la nota 2"));
nota3 = Number(prompt("Ingrese la nota 3"));

promedio = (nota1 + nota2 + nota3)/3

document.getElementById("N1").innerHTML = "APROBADO";
document.getElementById("N2").innerHTML = "APROBADO";
document.getElementById("N3").innerHTML = "APROBADO";
document.getElementById("PROM").innerHTML = "APROBADO";


if (promedio >= 9.65) {
    document.getElementById("N1, N2, N3").innerHTML = "APROBADO";
} else {
    document.getElementById("salida").innerHTML = "REPROBADO";
    
}