//Conjuntos com Set
//Mesma estrutura de set em python
//Não aceitam repetição de valores e não são indexados

//Declarando um conjunto
let cursos = new Set();

//Adicionando em um conjunto
cursos.add('Programação para Leigos');
cursos.add('Algoritmo e Lógica de Programação');

//Adicionando concatenado
cursos.add('Programação em JavaScript').add('Programação em Python').add('Programação em Java').add('Programação em C');

console.log(cursos);

//ver tamanho do conjunto
console.log(`Tamanho do conjunto: ${cursos.size} elementos.`);

// Verificar se elemento pertence ao conjunto
console.log(`Possui o curso Programação em Java? ${cursos.has('Programação em Java')}`);

//Deletar elementos de um conjunto
let ret = cursos.delete('Programação em Python');
console.log(cursos);
console.log(ret);



frutas = ['abacaxi', 'uva', 'manga', 'uva']

frutas_unicas = new Set(frutas)
console.log(frutas_unicas);