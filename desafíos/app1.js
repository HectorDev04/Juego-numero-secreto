/*
Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
*/
function IMC(altura, peso) {
    let imc = peso / (altura * altura);
    console.log(`El IMC es: ${imc.toFixed(1)}`);
};

let peso = 80;
let altura = 1.75;
IMC(altura, peso);


