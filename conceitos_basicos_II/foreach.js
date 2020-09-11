var cursos = ['Programação para leigos', 'algoritmos', 'programação em C', 'programação em Java', 'programação em django', 'programação em python'];
//console.log(cursos);
//console.log('tamanho da array: ' + cursos.length);


//definir uma funcao

function imprimir(curso, indice){
    console.log(indice +' - '+ curso);
}

cursos.forEach(imprimir)

// utilização de uma função lambda/callback e template string
// funcao lambda em javascript não tem nome, só parametros
// forEach é a mais moderna e recomendada forma de iterar um array
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`)
})



