let numeros = [1, 2, 3, 4, 5, 6]

function dobrar(valor){
    return valor * 2;
}

let res1 = numeros.map(dobrar);
console.log(res1);

// Funções Lambda

let res2 = numeros.map(function(valor){
    return valor * 2;
});

console.log(res2)
