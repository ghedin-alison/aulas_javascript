// Funções callback

const cursos = [
    "Programação para Leigos",
    "Algoritmos e Lógica de Programação",
    "Programação em C",
    "Programação em Java",
    "Programação em Python",
    "Programação em JavaScript",
    "Desenvolvimento Web com Django e Python",
];

// function apresentar(curso, indice){
//     console.log(`${indice + 1} - ${curso}`);
// }


// cursos.forEach(apresentar) // aqui está sendo utilizado o callback

// cursos.forEach((curso, indice) => console.log(`${indice+1} - ${curso}`));

const precos = [3.99, 1.5, 66.99, 87.26, 152.34, 49.65, 50.15, 28.74]
//Forma 1
menores = precos.filter(function(preco){
    return preco < 50;
});
//console.log(menores)

men = precos.filter(preco => preco <= 50)
console.log(men)

// map, filter, reduce, forEach são todos exemplos de utilização de callback