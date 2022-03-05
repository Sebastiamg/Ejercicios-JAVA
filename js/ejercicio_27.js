var i, nom, nota, promedio, suma;
nota = 0;
suma = 0;
promedio = 0;
alert("Nombre del estudiante")
document.write("Nombre del estudiante",'<BR/>');
nom = prompt();
alert("Numero de notas")
document.write("Numero de notas",'<BR/>');
let not = parseInt(prompt());
alert("Coloca las notas del Estudiante")
for (i=1;i<=not;i++) {
    document.write("-----------------------",'<BR/>');
    document.write("Escribe la nota del estudiante",'<BR/>');
    nota = prompt();

    nota == nota;
    suma = (suma + nota);
    promedio = (suma/not);
}
document.write("----------------------------",'<BR/>');
document.write("La suma de las notas es :",(suma),'<BR/>');
document.write("----------------------------",'<BR/>');
document.write("El promedio del estudiante es ",promedio,'<BR/>');

