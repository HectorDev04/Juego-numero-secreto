function holaMundo() {
    console.log('Hello, world');
}
holaMundo();

function saludo(name) {
    console.log(`Hola, ${name}`);
}
saludo('Hector');

function number(num) {
    num = num * 2;
    console.log(num);
}
number(2);

function calculoPromedio(n1, n2, n3) {
    let sum = parseInt((n1 + n2 + n3) / 3);
    console.log(sum);
}
calculoPromedio(10, 10, 10);

function numMayor(n1, n2) {
    if (n1 > n2) {
        console.log(`El primer número es el mayor: ${n1}`);
    } else {
        console.log(`El segundo es el mayor: ${n2}`);
    };
};
numMayor(70, 20);

function multiplicacion(num) {
    let resultado = parseInt(num * num);
    console.log(resultado);
}
multiplicacion(2);
