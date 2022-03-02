

var pago;
	
var nombre = new String();
var horas = new Number();
var pagahora = new Number();
    
    
alert("¿cuál es el nombre del trabajador?");
document.write("¿Cuál es el nombre del trabajador?",'<BR/>');
nombre = prompt();
document.write(nombre,"</BR>");
    
    alert("¿Cuántas horas ha trabajado en el mes?");
document.write("¿Cuántas horas ha trabajado en el mes?",'<BR/>');
horas = Number(prompt());
document.write(horas,"</BR>");

    alert("¿Cuánto pagan por hora?");
document.write("¿Cuánto pagan por hora?",'<BR/>');
pagahora = Number(prompt());
document.write(pagahora,"</BR>");

pago = (horas*pagahora);
document.write("El empleado ",nombre," debe recibir un pago de ",pago,'<BR/>');


