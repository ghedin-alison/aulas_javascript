/**
 * Função fabrica ou function factory
 * Fabrica de objetos - devolve objetos JavaScript
 */

function fabricar_curso(n, p) {
    const desconto = 0.9;
    return {nome: n, preco: (p * desconto).toFixed(2)}
}


console.log(fabricar_curso("Programação em JavaScript", 50));
console.log(fabricar_curso("Programação em Java", 100));

cursos = []

for(let i=0; i < 5; i++){
    cursos.push(fabricar_curso(`Curso ${i + 1}`, `${(19.99 + i * 3)}`));
};

console.log(cursos)

