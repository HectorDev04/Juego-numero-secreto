let numSecret = 0;
let intentos = 0;
let listaNumSorteados = [];
let numMax = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numUser = parseInt(document.getElementById("valueUser").value);
    intentos++;
    if (numUser === numSecret) {
        asignarTextoElemento(
            "p",
            `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
        );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numUser > numSecret) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector("#valueUser").value = "";
}

function generarNumSecret() {
    let numGenerado = Math.floor(Math.random() * numMax) + 1;

    // SI ya sorteamos todos los números
    if (listaNumSorteados.length == numMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else {

        if (listaNumSorteados.includes(numGenerado)) {
            return generarNumSecret();
        } else {
            listaNumSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function initialConditions() {
    asignarTextoElemento("h1", "JS Game");
    asignarTextoElemento("p", `Indica un número del 1 al ${numMax}`);

    intentos = 0;

    document.getElementById("reiniciar").setAttribute("disabled", true);

    numSecret = generarNumSecret();
}

function rebootGame() {
    limpiarCaja();
    initialConditions();
}

document.addEventListener("DOMContentLoaded", initialConditions);
