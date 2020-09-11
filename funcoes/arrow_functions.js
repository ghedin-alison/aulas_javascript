// forma 1
function soma1(a, b) {
    return a + b;
}

//forma 2
const somar2 = function (c, d) {
    return c + d
}

//console.log(somar2(5, 6))

//arrow function

const somar3 = (num1, num2) => {return num1 + num2;}

console.log(somar3(5, 12))

/**
 * Atenção:
 * Caso sua funcao tenha apenas um parametro de entrada e executa apenas uma linha
 * podemos simplificar ainda mais usando arrow function
 */

const dobrar = valor => valor * 2;

console.log(dobrar(8));


const msg = () => console.log("Retornando somente uma mensagem de uma arrow function sem parametros")
msg()