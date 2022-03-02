var altura, area, base, perimetro;

alert("Base");
document.write("Base: ");
base = Number(prompt());
document.write(base,'<br>');

alert("Altura");
document.write("Altura: ");
altura = Number(prompt());
document.write(altura,'<br>');

area = base*altura;
perimetro = (base*2)+(altura*2);
document.write("El Area es: ",area,'<BR/>');
document.write("El perimetro es: ",perimetro,'<BR/>');