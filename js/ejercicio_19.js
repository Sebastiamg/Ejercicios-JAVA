
	var a, b, c, n1, n2, n3;
    alert("Ingrese 3 números para ordenarlos: ")
	document.write("Ingrese 3 numeros para ordenarlos",'<BR/>');
	
	n1 = prompt("Numero 1");
    document.write("Numero 1: ",n1,'<BR/>');
	
	n2 = prompt("Numero 2");
    document.write("Numero 2: ",n2,'<BR/>');
	
	n3 = prompt("Numero 3");
    document.write("Numero 2: ",n3,'<BR/>');


	if ((n1>n2) && (n1>n3)) {
		a = n1;
		if (n2>n3) {
			b = n2;
			c = n3;
		} else {
			b = n3;
			c = n2;
		}
	} else {
		if (n2>n3) {
			a = n2;
			if (n1>n3) {
				b = n1;
				c = n3;
			} else {
				b = n3;
				c = n1;
			}
		} else {
			a = n3;
			if (n1>n2) {
				b = n1;
				c = n2;
			} else {
				b = n2;
				c = n1;
			}
		}
	}
	document.write("Ascendente : ",c,", ",b,", ",a,'<BR/>');
	document.write("Descendente : ",a,", ",b,", ",c,'<BR/>');