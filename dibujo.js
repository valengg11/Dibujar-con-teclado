teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibujarConTeclado);
var d = document.getElementById("area_de_dibujo");
var lienzo = d.getContext("2d");
var x = 150;
var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath()
};

function dibujarConTeclado(evento) {
    var colorLinea = "pink";
    var movimiento = 5;
    switch(evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorLinea, x, y, x, y - movimiento);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorLinea, x, y, x, y + movimiento);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorLinea, x, y, x - movimiento, y);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorLinea, x, y, x + movimiento, y);
            x = x + movimiento;
        break;    
        default:
            console.log("otra tecla")
        break;    
    }  
}
