let itexto = document.getElementById('produto');

console.log(itexto);

// let ispan = document.getElementsByTagName('span');

// console.log(ispan);

// let classe = document.getElementsByClassName('texto');

// console.log(classe[2]);

// //Ler valores de duas maneiras diferentes
// console.log(ispan[0].textContent)
// console.log(ispan[1].innerHTML)


//Alterar valores
// ispan[0].innerHTML  = 'Javascript';
// ispan[1].textContent  = 'Aprendizado';

let ispan = document.getElementsByTagName('span')[0];
console.log(ispan);

ispan.style.textTransform = 'uppercase';

let inp = document.querySelector('body div.container div.row input');

console.log(inp);


let inp2 = document.querySelector('input'); // busca pela tag

console.log(inp2);

let cl = document.querySelector('.texto'); // busca pela classe pelo query selector devolve o primeiro

console.log(cl);

let cls = document.querySelectorAll('.texto');

console.log(cls); 

let div1 = document.querySelector('#div1'); // busca elemento pelo id

console.log(div1);


let imp = document.querySelector('input[name=produto]'); //

console.log(imp);


// exemplo 1
let btn = document.querySelector('button.btn');

let inpt = document.querySelector('input[name=produto]');

btn.onclick = function () {
    alert(`Temos o texto ${inpt.value}`)
}


// btn.onclick = function () {
//     alert ('Produto adicionado..');
// }

// Boas práticas html:
// Manter só codigo html no html. por isso a boa utilização do DOM faz toda a diferença
// Acima foi trabalhado com as ações do botao com base na classe. eventos interação tudo no javascript