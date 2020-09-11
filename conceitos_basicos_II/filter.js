var numeros = [4, 5, 6, 7, 8, 9, 10, 15, 16, 19, 25];

function filtrar_pares(num){
    return num % 2 === 0;
}

function filtrar_impares(num){
    return num % 2 !== 0;
}

function filtrar_multiplo_5(num){
    return num % 5 === 0;
}

// como funciona o filter: as funcoes acima retornam true ou false. 
//se for true o filter classifica para entrar na nova array gerada

var res = numeros.filter(filtrar_pares);
//console.log(res);

var res = numeros.filter(filtrar_impares);
//console.log(res);

var res = numeros.filter(filtrar_multiplo_5);
//console.log(res);


alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 7.5},
    {nome: 'Fernanda', nota: 7.2},
    {nome: 'Rafael', nota: 3.5},
    {nome: 'Ana', nota: 6.5},
    {nome: 'Francieli', nota: 9.5},
    {nome: 'Simone', nota: 8.5},
    {nome: 'Ricardo', nota: 5.5},
];


function filtrar_maiores_7(aluno){
    return aluno.nota >= 7
}

var aprovados = alunos.filter(filtrar_maiores_7)
console.log(aprovados)


//Filter geralmente traz um array menor do que o map, pq filtra