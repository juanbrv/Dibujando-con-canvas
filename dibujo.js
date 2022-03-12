var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

//dibujarLineas(colorcito, 1, 1, 1, 300);
//dibujarLineas(colorcito, 1, 300, 300, 300);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujoPorClick() {
    //var x = texto.value;
    //alert("No me toques ahi " + texto.value);
    var lineas = parseInt(texto.value);
    var l = 0;
    var xi, xf, yi, xf;
    var nxf, nyf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;
    console.log(lienzo);
    console.log(document);

    for (l = 0; l < lineas; l++) {
        xf = espacio * l;
        yi = espacio * (l + 1);
        xi = espacio * l;
        yf = espacio * (l + 1);
        nxf = 300 - xf;
        nyf = 300 - yf;
        dibujarLinea(colorcito, xi, 300, 300, nyf);
        dibujarLinea(colorcito, 0, xf, nxf, 0);
        dibujarLinea(colorcito, 0, xf, yi, 300);
        dibujarLinea(colorcito, xi, 0, 300, yf);
        console.log("Linea " + l);

    }
}