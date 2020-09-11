/*
Array contendo 5 elementos -> n=5

indices -> posicao do elemento no array
[0][1][2][3][4]

valores em um array
[12][24][36][48][95]

detalhes sobre arrays:
    - Possuem tamanho infinito*(depende da memoria do servidor)
    - Podemos colocar qualquer tipo de dado


*/

//Forma 1

var alunos = new Array('Jão', 'Ana', 'Marcos', 'Thiago');
//console.log(alunos);

//Forma 2 (recomendada)
var notas = [1, 2, 3, 4, 5];
//console.log(notas);

//Criando um array vazio
var lista =[];
//console.log(lista);

//fazendo acesso ao valor de um indice
//console.log(alunos[2]);

//alterando o valor de um indice
notas[4] = 9;
//console.log(notas);

// Atenção ao acessar um indice inexistente
notas[9] = 10;
//console.log(notas); // preenche os indices não existentes com <empty items>
//console.log(notas[6]); // retorna undefined

// Iterar em um array
for(i = 0; i < notas.length; i++){
    if(notas[i] == undefined){
        notas[i] = 99
    }
}
//console.log(notas)

// Inserindo elementos no final do array
nomes = ['Danieli', 'Bruna', 'Rafaela', 'Gabriel', 'Gustavo'];
nomes.push('Heron'); // funciona como o append no python

//console.log(nomes);

// Tamanho do array
//console.log(nomes.length);

// Ordenar os dados de um array - Considera que todos os elementos da array são strings.
var dados = [1, 8, 9, 45, 13, 152, 16, 35, 21 ,48, 11, 97, 88];
//dados.sort();
//console.log(dados); // Atenção, ordenacao de inteiros não funciona assim
dados.sort(function(a, b) {return a - b;}); // função lambda ou callback
//console.log(dados)


var classe = ['João', 'Silvia', 'Roberta', 'Joana', 'Ana'];
classe.sort();
//console.log(classe)

var valores = [15.66, 9.68, -35.12, 3.54]
//valores.sort() // Atenção, ordenacao de float nao funciona assim
valores.sort(function(a, b) {return a - b;});
//console.log(valores);

// Deletando itens em um array
delete valores[2];
//console.log(valores); // exibe empty item
valores[2] = 9.68;
//console.log(valores);


//valores.splice(3, 1); // a partir do indice 3 delete 1 elemento(inclusive)
//console.log(valores);

valores.splice(3, 0, 48.95, 82.31); // a partir do indice 3 não deleta ninguem e adiciona os dois valores da sequencia
//console.log(valores);


// removendo ultimo item da array
classe.pop();
//console.log(classe);

// a funcao pop() retorna o ultimo elemento quando o remove
ret = classe.pop();
//console.log(ret); // Roberta
//console.log(classe);


// Removendo o primeiro item de um array
//console.log(classe);
item = classe.shift(); // remove e retorna o item removido
//console.log(item);
//console.log(classe);


// Inserindo elementos no inicio de um array
classe.unshift("Adriano");
//console.log(classe);

// retorna um novo array a partir do indice informado
var listagem = [2, 9, 51, 67, 68, 78, 85]
var nova_listagem = listagem.slice(3);
//console.log(nova_listagem);


var outra = listagem.slice(1, 3) // a partir do indice 1 pegue até indice 3(não inclusivo)
//console.log(outra);

// Concatenando array
var pares = [2, 4, 6, 8]
var impares = [1, 3, 5, 7]
var resultado = pares.concat(impares)
//console.log(resultado)
resultado.sort(function(a, b){return a - b;});
//console.log(resultado);


// Array dentro de array(matrizes)
// 4 x  4
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

/**
 * [ 1,  2,  3,  4] [linha 0]
 * [ 5,  6,  7,  8] [linha 1]
 * [ 9, 10, 11, 12] [linha 2]
 * [13, 14, 15, 16] [linha 3]
 * 
 */
console.log(tabuleiro[0][0])
console.log(tabuleiro[2][3])