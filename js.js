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
    let punto = document.getElementById("punto");
    let sin = document.getElementById("sin");
    let cos = document.getElementById("cos");
    let tan = document.getElementById("tan");
    let sqrt = document.getElementById("sqrt");
    let log = document.getElementById("log");
    let ln = document.getElementById("ln");
    let pi = document.getElementById("pi");
    let e = document.getElementById("e");
    let parentesis = document.getElementById("parentesis");
    let parentesis2 = document.getElementById("parentesis2");

    // Eventos
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
    parentesis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "(";
    }
    parentesis2.onclick = function (e) {
        resultado.textContent = resultado.textContent + ")";
    }   
    punto.onclick = function (e) {
        if (!resultado.textContent.includes(".")) {
            resultado.textContent = resultado.textContent + ".";
        }
    }
    reset.onclick = function (e) {
        limpiar();
    }

    sin.onclick = function (e) {
        calcularFuncion("sin");
    }
    cos.onclick = function (e) {
        calcularFuncion("cos");
    }
    tan.onclick = function (e) {
        calcularFuncion("tan");
    }
    sqrt.onclick = function (e) {
        calcularFuncion("sqrt");
    }
    log.onclick = function (e) {
        calcularFuncion("log");
    }
    ln.onclick = function (e) {
        calcularFuncion("ln");
    }
    pi.onclick = function (e) {
        resultado.textContent = Math.PI;
    }
    e.onclick = function (e) {
        resultado.textContent = Math.E;
    }

    suma.onclick = function (e) {
        operandoa = parseFloat(resultado.textContent) || 0;
        operacion = "+";
        limpiar();
    }
    igual.onclick = function (e) {
        const texto = resultado.textContent;
        if (texto.includes("(") || texto.includes(")") || texto.includes("^")) {
            resolverExpresion();
        } else {
            operandob = parseFloat(resultado.textContent) || 0;
            resolver();
        }
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

function calcularFuncion(tipo) {
    let valor = parseFloat(resultado.textContent) || 0;
    let res = 0;
    switch (tipo) {
        case "sin":
            res = Math.sin(valor);
            break;
        case "cos":
            res = Math.cos(valor);
            break;
        case "tan":
            res = Math.tan(valor);
            break;
        case "sqrt":
            res = valor >= 0 ? Math.sqrt(valor) : "Error";
            break;
        case "log":
            res = valor > 0 ? Math.log10(valor) : "Error";
            break;
        case "ln":
            res = valor > 0 ? Math.log(valor) : "Error";
            break;
    }
    resultado.textContent = res;
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

function resolverExpresion() {
    let expresion = resultado.textContent.replace(/\^/g, "**");
    try {
        let res = Function('"use strict"; return (' + expresion + ')')();
        resultado.textContent = Number.isFinite(res) ? res : "Error";
    } catch (error) {
        resultado.textContent = "Error";
    }
}
