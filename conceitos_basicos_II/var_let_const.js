var num = 42;
//console.log(num);

num = num + 18;
//console.log(num);

//let - é a maneira mais segura de declarar variaveis em js. 
//Garante estrutura de escopo e não deixa declarar variavel duplicada.

let outro_num = 42;
//console.log(outro_num);

outro_num = outro_num + 18;
//console.log(outro_num);

//const - utilizada para declarar constantes

const TAXA = 4.50;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

// Valor constante x Mutação
const curso = {nome: "Programação em JavaScript"}
console.log(curso.nome)


//Não posso alterar o valor de uma constante
//curso = 46; //TypeError

//Podemos realizar mutação em dados contidos numa constante
curso.nome = "Programação em Python" //mutação

console.log(curso)


// A variável pode ser alterada, use o let
// A variável não pode ser alterada, use o const
