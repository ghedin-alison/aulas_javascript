//Object Short 

const nome = 'beterraba';
const preco = 2.99;
const unidade = 'kg'

//Forma usual repete nome da variavel no objeto
const legume = {
    nome: nome,
    preco: preco,
    fornecedor: 'Ceagesp'
};

console.log(legume);

//Object short
const leg = {
    nome,
    preco,
    peso_em: unidade,
    fornecedor: 'Associação Vale do Ribeira'
};

console.log(leg);
