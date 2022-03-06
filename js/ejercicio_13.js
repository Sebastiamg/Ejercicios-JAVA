let aAprob = parseInt(prompt("Cantidad de alumnos Aprobados:"));

let aReprob = parseInt(prompt("Cantidad de alumnos Reprobados:"));

suma = aAprob + aReprob;
porcentaje1 = aAprob / suma;
porcentaje2 = aReprob / suma;

total1 = porcentaje1 * 100;
total2 = porcentaje2 * 100;

alert("Porcetaje de alumnos APROBADOS: "+total1+"%"+"\nPorcentaje de alumnos REPROBADOS: "+total2+"%");

document.write("<p>Porcetaje de alumnos APROBADOS: "+total1,"%","<br>","Porcentaje de alumnos REPROBADOS: "+total2,"%</p>");