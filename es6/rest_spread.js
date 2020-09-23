//Operador Rest/Spread(juntar/espalhar) -> ...
// Funciona parecido com o args em python?

function total(...precos){
    let total = 0;
    precos.forEach(p => total += p);
    return total;
};

console.log(total(23.44, 5.88, 9.66).toFixed(2));




let frutas_1 = ['Abacaxi', 'Abacate', 'Manga'];
let frutas_2 = ['Melancia', 'Maçã', 'Uva'];

let compras = [...frutas_1, ...frutas_2]; // operador spread(...)
console.log(compras);



let alunos = ['Jão', 'Sebastião', 'Joana', 'Melissa', 'Rafaela', 'Sergio', 'Rodrigo'];
let novo_aluno = 'Francieli'

//Adicionando com o push
alunos.push(novo_aluno);
console.log(alunos);


//Adicionando com spread
let todos = [...alunos, novo_aluno];
console.log(todos);





