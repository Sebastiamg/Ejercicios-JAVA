var a, b, num;

alert("Ingrese un número")
document.write("Ingrese un número",'<BR/>');
num = Number(prompt());
for (a=num;a>=1;a--) {
	for (b=1;b<=a;b++) {
		document.write(b,"  ");
	}
	    document.write("",'<BR/>');
}