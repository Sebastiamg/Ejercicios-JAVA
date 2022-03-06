perimetro = 0;
area = 0;

alert("Area y Perímetro de un Circulo")

let radio = parseInt(prompt("Ingrese el radio del círculo:"))

perimetro = (2*Math.PI) * radio;
area = Math.PI * (radio * radio);

alert("El area del círculo es: "+area+"\nEl perímetro del círculo es: "+perimetro);
document.write("<p>Radio: ",radio,"<br>");
document.write("Area: ",area,"<br>");
document.write("Perímetro: ",perimetro,"<p>");