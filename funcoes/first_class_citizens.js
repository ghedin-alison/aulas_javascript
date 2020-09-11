// Funções são consideradas cidadao de primeira classe pois funcionam como qualquer outro tipo de dado.

function somar(a, b){
    return a + b;
}

//console.log(somar(5, 2))

// Exemplo 1

const executar = somar;

//console.log(executar(8, 7))

//Exemplo 2

function subtrair(c, d){
    return c - d;
}

function faz_algo(n1, n2, funcao){
    return funcao(n1, n2);
}

let retorno =  faz_algo(7, 3, subtrair);
//console.log(retorno);


//Exemplo 3

function outra(funcao) {
    return funcao;
}

let ret = outra(somar);

console.log(ret(8, 2))



/**
 * First class citizens/Higher order function
 * 
 */

 