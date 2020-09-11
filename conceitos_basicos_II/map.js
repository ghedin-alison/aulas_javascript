// map é uma estrutura para realizar transformações em um array
// map gera um novo array de mesmo tamanho do array original

var valores = [2 ,4, 6, 8, 10]

// opção 1
var dobro = valores.map(function(valor){return valor * 2;});
//console.log(dobro)

//opção 2
function dobrar(num){
    return num * 2
}

var res = valores.map(dobrar);
//console.log(res);

//Encadear maps para realizar multiplas trasnformações

function soma_4(valor){
    return valor + 4;

};

function dividir_por_5(valor){
    return valor / 5;
}

var resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);
console.log(resultado)

// A grande diferença entre forEach e map é que map gera um novo array. forEach não gera novo array
// Por isso map é uma função que permite encadeamento