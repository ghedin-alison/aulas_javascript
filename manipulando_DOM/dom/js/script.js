// cria uma variavel para selecionar a classe link no DOM
let a = document.querySelector('.link');
//Imprime o DOM
console.log(a);
//Imprime o texto que está ligado a nova variavel "a"
console.log(a.innerText);
//a partir do "a", imprimir o nó do pai/origem
console.log(a.parentNode)
//a partir do "a", imprimir o nó do pai/origem e do pai do body, no caso html
console.log(a.parentNode.parentNode)
//a partir do "a", imprimir o nó do pai/origem, do pai do body, do pai do html, no caso DOM
console.log(a.parentNode.parentNode.parentNode)
//a partir do "a", imprimir o nó do pai/origem, do pai do body, do pai do html, e ai consulta os filhos do html
console.log(a.parentNode.parentNode.childNodes)
//a partir do "a", imprimir o nó do pai/origem, do pai do body, do pai do html, e ai busca o primeiro filho
console.log(a.parentNode.parentNode.firstChild)
//a partir do "a", imprimir o nó do pai/origem, do pai do body, do pai do html, e ai busca o ultimo filho
console.log(a.parentNode.parentNode.lastChild)
//a partir do "a", imprimir o nó do pai/origem, do pai do body, do pai do html, e ai busca os irmãos
console.log(a.parentNode.parentNode.firstChild.nextSibling)
//a partir do "a", imprimir o nó do pai/origem, do pai do body, do pai do html, e ai busca os irmãos
console.log(a.parentNode.firstChild.nextSibling)