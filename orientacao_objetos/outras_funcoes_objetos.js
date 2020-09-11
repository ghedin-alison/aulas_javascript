const curso = {
    nome: 'Programação em JavaScript',
    carga_horaria: 25,
    preco: 27.99
}

const linha = '========================================================================';
console.log(curso);
console.log(typeof(curso));
console.log(linha);
//metodo para obter chaves de objeto
console.log(Object.keys(curso));
console.log(linha);

//metodo para obter valores de objeto
console.log(Object.values(curso));
console.log(linha);

//metodo para retornar array de chave/valor
console.log(Object.entries(curso));
console.log(Object.entries(curso)[0]);
console.log(linha);

//foreach e arrow function
Object.entries(curso).forEach(parametro => {
    console.log(`${parametro[0]}: ${parametro[1]}`)
});
console.log(linha);


// destructuring
Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});
console.log(linha);

//defineProperty - alterando o enumerable, quando imprimimos o objetos ele pode ou não ser exibido. Mas se acionado diretamente
//sempre será exibido
Object.defineProperty(curso, 'publicacao', {
    enumerable: false,
    writable: false,
    value: '01/09/2020'
});
console.log(curso);
console.log(curso.publicacao);
console.log(linha);

//congelando um objeto para não sofrer alterações
Object.freeze(curso);

curso.instrutor = "João Alves";
curso.nome = "Programação em Python";

console.log(curso);
console.log(linha);

// criar tabela a partir de um objeto
const usuarios = [
    {nome: "Alison Ghedin", empresa: "Prime IT"},
    {nome: "Francieli Ghedin", empresa: "Banco do Brasil"},
    {nome: "Danieli Ghedin", empresa: "UTFPR"}
];

console.table(usuarios); //deveria imprimir tabela, mas não funcionou nessa versão
