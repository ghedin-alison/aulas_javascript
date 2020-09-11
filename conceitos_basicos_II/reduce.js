// estrutura de repetião geralmente urilizada em conjunto com map ou filter
// função é reduzir coleção de valores em um unico valor

var precos = [ 4.66, 3.78, 9.56, 1.34, 0.99]

soma = 0;

for(var i = 0; i < precos.length; i++){
    var soma = soma + precos[i];
    
}

//console.log(`A soma é de: ${soma}`)

soma = 0;
precos.forEach(function(valor){soma += valor})
//console.log(soma)


// Reduce
function somar(ant, atual){
    return ant + atual;
}

ret = precos.reduce(somar)
//console.log(ret)


/**
 * Como funciona o reduce?
 * primeira execução:
 * pega os dois primeiros itens(indice 0 e 1) e aplica a funcao
 * demais execuções:
 * com base no resultado da execução anterior, executa a funcao no proximo item
 * 
 * 
 */

 // Outro exemplo de utilização de reduce
 function adicionar_taxa(valor){
     return valor + 5;
 }

 var ret = precos.map(adicionar_taxa).reduce(somar);
 //console.log(ret);


 function preco_maior_4(valor){
     return valor > 4;
 }

 ret = precos.filter(preco_maior_4).map(adicionar_taxa).reduce(somar);
 //console.log(ret)