let operandoa;
let operandob;
let operacion;
let resultado;

function init() {
    resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
    let igual = document.getElementById("igual");

    //Eventos

    uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function (e) {
        limpiar();
    }

    suma.onclick = function (e) {
        operandoa = parseFloat(resultado.textContent) || 0;
        operacion = "+";
        limpiar();
    }
    igual.onclick = function (e) {
        operandob = parseFloat(resultado.textContent) || 0;
        resolver();
    }
    resta.onclick = function (e) {
        operandoa = parseFloat(resultado.textContent) || 0;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        operandoa = parseFloat(resultado.textContent) || 0;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) {
        operandoa = parseFloat(resultado.textContent) || 0;
        operacion = "/";
        limpiar();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function resolver() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = operandoa + operandob;
            break;
        case "-":
            res = operandoa - operandob;
            break;
        case "*":
            res = operandoa * operandob;
            break;
        case "/":
            res = operandob !== 0 ? operandoa / operandob : "Error";
            break;
    }
    resultado.textContent = res;
}
