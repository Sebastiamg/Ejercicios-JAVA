var cantidadproducto, descuento, nombreproducto, precioproducto, resta, subtotal;
	
alert("Producto");
document.write("<p>Producto: ",'<BR/>');
nombreproducto = prompt();
document.write(nombreproducto,'<br>');

alert("Precio del producto");
document.write("Precio del Producto: ");
precioproducto = Number(prompt());
document.write(precioproducto,'<br>');

alert("Cantidad del Producto");
document.write("Cantidad del Producto: ");
cantidadproducto = Number(prompt());
document.write(cantidadproducto,'<br>');


subtotal = precioproducto*cantidadproducto;
document.write("Subtotal: ",subtotal,'<BR/>');
descuento = subtotal*0.1;
document.write("Descuento del 10%: ",descuento,'<BR/>');
resta = subtotal-descuento;
document.write("Total: ",resta,"</p>",'<BR/>');


