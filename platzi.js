var vp = document.getElementById("villaPlatzi");
var ctx = vp.getContext('2d');

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

var fondo = {
    URL: "imagenes/tile.png",
    cargaOK: false
};
var vaca = {
    URL: "imagenes/vaca.png",
    cargaOK: false
};
var cerdo = {
    URL: "imagenes/cerdo.png",
    cargaOK: false
};
var pollo = {
    URL: "imagenes/pollo.png",
    cargaOK: false
};

var cantidad = aleatorio(5,25);

fondo.imagen = new Image(); //Image - inicia con Mayuscula al ser un Opbjeto
fondo.imagen.src = fondo.URL;
fondo.imagen.addEventListener("load", cargarFondo);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

vaca.imagen = new Image();
vaca.imagen.src = vaca.URL;
vaca.imagen.addEventListener("load", cargarVaca);
    
    function cargarVaca() {
        vaca.cargaOK = true;
        dibujar();
    }

cerdo.imagen= new Image();
cerdo.imagen.src = cerdo.URL;
cerdo.imagen.addEventListener("load", cargarCerdo);
    
    function cargarCerdo() {
        cerdo.cargaOK = true;
        dibujar()
    }

pollo.imagen= new Image();
pollo.imagen.src = pollo.URL;
pollo.imagen.addEventListener("load", cargarPollo);
        
    function cargarPollo() {
        pollo.cargaOK = true;
        dibujar()
    }
    
    
    function dibujar() {
    if(fondo.cargaOK == true){
        ctx.drawImage(fondo.imagen, 0, 0);
    }
    
    if(vaca.cargaOK == true){
        console.log(cantidad)
        for(var v=0; v<cantidad; v++){
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        ctx.drawImage(vaca.imagen, x, y);
        }
    }
    if(pollo.cargaOK == true){
        for(var v=0; v<10; v++){
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        ctx.drawImage(pollo.imagen, x, y);
        }
    }


}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
var xc = 0;
var yc = 0;

    cerdo.imagen = new Image();
    cerdo.imagen.src = cerdo.URL;
    cerdo.imagen.addEventListener("load", function () {
        cerdo.cargaOK = true;
        moverCerdo()
    });

function moverCerdo(params) {

    ctx.drawImage(cerdo.imagen, xc, yc);
    document.addEventListener("keydown", coordenadasCerdo);

}

function coordenadasCerdo(evento) 
{
    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.UP:
            ctx.drawImage(cerdo.imagen,xc, yc - movimiento);
            yc = yc - movimiento;
            break;
        case teclas.DOWN:
            ctx.drawImage(cerdo.imagen,xc, yc + movimiento);
            yc = yc + movimiento;
            break;
        case teclas.LEFT:
            ctx.drawImage(cerdo.imagen,xc - movimiento, yc);
            xc = xc - movimiento;
            break
        case teclas.RIGTH:
            ctx.drawImage(cerdo.imagen,xc + movimiento, yc);
            xc = xc + movimiento;
            break
        default:
            //console.log("otra tecla");
            break;
    }
}
