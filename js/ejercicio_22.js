document.write("<p>serie de Fibonnaci: ",'<BR/>');
n = Number();
a = 0;
b = 1;

for (let i = 1 ; i <= 13 ; i++) {
    document.write("<p>",a,"</p>");
    c = a+b;
    a = b;
    b = c;
}
