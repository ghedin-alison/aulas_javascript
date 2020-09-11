// destructuring com array

const numeros = [1, 3, 5, 7];

const [a, b, c, d] = numeros;

//console.log(a);
//console.log(b);
//console.log(c);

// Podemos descartar valores
const [n1,  , n3, n4] = numeros;

//console.log(n1);
//console.log(n4);
//console.log(n3);

// Podemos gerar valor default, caso não encontre no container

const[num1, num2, num3, num4 = 34, num5 = 99] = numeros;

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);


//Destructuring com objetos
const produto ={
    nome: "Beterraba",
    preco: 1.50
}

const {nome, preco} = produto;

console.log(`O item ${nome} custa R$${preco}`);
