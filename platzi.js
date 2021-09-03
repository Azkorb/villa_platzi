var vp = document.getElementById("villaPlatzi");
var ctx = vp.getContext('2d');


var fondo = {
    URL: "imagenes/tile.png",
    cargaOK: false
};

var vaca = {
    URL: "imagenes/vaca.png",
    cargaOK: false
};


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

    function dibujar() {
    if(fondo.cargaOK == true){
        ctx.drawImage(fondo.imagen, 0, 0);
    }

}


/*function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}*/