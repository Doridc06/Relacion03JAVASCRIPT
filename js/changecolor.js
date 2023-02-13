let cab = document.getElementById("Cabecera");
cab.style.background = "black";
cab.innerHTML = "Relacion 03 - JavaScript";
cab.style.color = "#EE66F4";
cab.style.textAlign = "center";

let ej1 = document.querySelector("h2");
ej1.innerHTML = "Ejercicios de la Asignatura Lenguaje de Marcas:";
ej1.style.textAlign = "center";
ej1.style.padding = "20px";
ej1.style.color = "#9F15A5";

let ej2 = document.querySelectorAll("h2");
ej2[1].innerHTML = "1º DAM";
ej2[1].style.padding = "20px";
ej2[1].style.color = "#9F15A5";

let imagen = document.getElementsByTagName("img");
function cambiarImagen() {
  imagen[0].src = "./images/charlott.jpg";
}

let colorTitulo = document.querySelector("h1");
function cambiarColor() {
  colorTitulo.style.color = "rgb(191, 219, 29)";
}

let fecha = new Date();
let subcab = document.querySelectorAll("h2");
let cambioReloj = setInterval(
  () => {
    fecha = new Date();
    let mes = String(fecha.getMonth() + 1).padStart(2, '0');
    let diaSemana = fecha.toLocaleString('default', { weekday: 'long' });
    diaSemana = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    subcab[1].innerHTML = fecha.toLocaleTimeString() + " - " + fecha.getDate() + "/" + mes +
      "/" + fecha.getFullYear() + " - " + diaSemana;
  },
  1000
);


setInterval(function () {
  if (confirm("¿Desea continuar en esta Página web?")) {
  } else {
    window.location.href = "https://www.epicgames.com/site/es-ES/home";
  }
}, 18000);

let cuadro = document.querySelector("h3");
cuadro.style.padding = "20px";
cuadro.style.color = "#9F15A5";
let ancho = document.documentElement.clientWidth;
let alto = document.documentElement.clientHeight;

let cambioTamano = setInterval(
  () => {
    let ancho = document.documentElement.clientWidth;
    let alto = document.documentElement.clientHeight;
    cuadro.innerHTML = ancho + "x" + alto;
    console.log(ancho + "x" + alto);
  },
  1000);


let btnRojo = document.getElementById('btnrojo');
let btnVerde = document.getElementById('btnverde');
let btnAzul = document.getElementById('btnazul');
let btnAmarillo = document.getElementById('btnamarillo');
let btnRosado = document.getElementById('btnrosado');
let btnReset = document.getElementById('btnreset');
let btnCambiarImagen = document.getElementById('btncambiarImagen');
let btnCambiarColor = document.getElementById('btncambiarColor');
let box = document.querySelector('.box');

function setEnterRojo() {
  btnRojo.style.background = "#FF0080"
}

function setLeaveRojo() {
  btnRojo.style.background = "#008080"
}

function setDownRojo() {
  btnRojo.style.background = "#FF8000"
}

function setColorRojo() {
  if (btnRojo.value == "rojo") {
    box.style.background = "#FF0000";
  }
}

function setEnterVerde() {
  btnVerde.style.background = "#FF0080"
}

function setLeaveVerde() {
  btnVerde.style.background = "#008080"
}

function setDownVerde() {
  btnVerde.style.background = "#FF8000"
}

function setColorVerde() {
  if (btnVerde.value == "verde") {
    box.style.background = "#00FF00";
  }
}

function setEnterAzul() {
  btnAzul.style.background = "#FF0080"
}

function setLeaveAzul() {
  btnAzul.style.background = "#008080"
}

function setDownAzul() {
  btnAzul.style.background = "#FF8000"
}

function setColorAzul() {
  if (btnAzul.value == "azul") {
    box.style.background = "#0000FF";
  }
}

function setEnterAmarillo() {
  btnAmarillo.style.background = "#FF0080"
}

function setLeaveAmarillo() {
  btnAmarillo.style.background = "#008080"
}

function setDownAmarillo() {
  btnAmarillo.style.background = "#FF8000"
}

function setColorAmarillo() {
  if (btnAmarillo.value == "amarillo") {
    box.style.background = "#FFFF00";
  }
}

function setEnterRosado() {
  btnRosado.style.background = "#FF0080"
}

function setLeaveRosado() {
  btnRosado.style.background = "#008080"
}

function setDownRosado() {
  btnRosado.style.background = "#FF8000"
}

function setColorRosado() {
  if (btnRosado.value == "rosado") {
    box.style.background = "#ff0080";
  }
}

function setEnterReset() {
  btnReset.style.background = "#FF0080"
}

function setLeaveReset() {
  btnReset.style.background = "#008080"
}

function setDownReset() {
  btnReset.style.background = "#FF8000"
}

function setColorReset() {
  if (btnReset.value == "reset") {
    box.style.background = "#000000";
  }
}

function setEnterCambiarImagen() {
  btnCambiarImagen.style.background = "#FF0080"
}

function setLeaveCambiarImagen() {
  btnCambiarImagen.style.background = "#008080"
}

function setDownCambiarImagen() {
  btnCambiarImagen.style.background = "#FF8000"
}

function setCambiarImagen() {
  if (btnCambiarImagen.value == "cambiarImagen") {
    box.style.background = "#00FF00";
  }
}

function setEnterCambiarColor() {
  btnCambiarColor.style.background = "#FF0080"
}

function setLeaveCambiarColor() {
  btnCambiarColor.style.background = "#008080"
}

function setDownCambiarColor() {
  btnCambiarColor.style.background = "#FF8000"
}

function setCambiarColor() {
  if (btnCambiarColor.value == "cambiarImagen") {
    box.style.background = "#00FF00";
  }
}