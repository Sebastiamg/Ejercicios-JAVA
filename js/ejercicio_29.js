var a, b, num;

alert("Ingrese un número");
num = Number(prompt());
document.write("<p>","Ingrese un número: ",num,'<BR/>');
for (a=num;a>=1;a--) {
	for (b=1;b<=a;b++) {
		
		document.write(b,"  ");

	}
	    document.write("",'<BR/>');
}
document.write("</p>");