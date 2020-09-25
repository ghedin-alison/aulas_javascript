//Utilizando o for of

let nome = 'Alison Ghedin';

for(let letra of nome){
    console.log(letra);
};

let numeros = [1, 2, 3, 4, 5];

for(let num of numeros){
    console.log(num**2);
};

let numbers = [1, 8, 6, 7, 5, 3];

//trabalhando com indice(utilizar o in)
for(indice in numbers){
    console.log(`Indice: ${indice} Valor: ${numbers[indice]}`);
}


let cursos = new Map([
    [1, 'Programação em C'],
    [2, 'Programação em Cobol'],
    [3, 'Programação em Java'],
    [4, 'Programação em JavaScript'],
    [5, 'Programação em Python'],
    [6, 'Programação em C++'],
    [6, 'Programação em Ruby'],
])

for(let curso of cursos){
    console.log(curso);
}

for(let curso of cursos){
    console.log(`${curso[0]} - ${curso[1]}`);
}

//Somente a chave
for(let chave of cursos.keys()){
    console.log(chave);
}
//Somente a valor
for(let valor of cursos.values()){
    console.log(valor);
}

//chave e valor

for(let [c, v] of cursos.entries()){
    console.log(`Chave: ${c} - Valor: ${v}`);
}
