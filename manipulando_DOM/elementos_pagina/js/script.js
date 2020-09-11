let btn = document.querySelector('button')

// adicionando elementos abaixo do nó
btn.onclick = function () {
    //cria um elemento de texto vazio
    let textElement = '';
    //seleciona o valor do campo input
    let inputValue = document.querySelector('input').value;
    //cria um novo elemento html (paragrafo)
    let novoElementoParagrafo = document.createElement('p');
    //adiciona classe ao elemento
    novoElementoParagrafo.setAttribute('class', 'classe-p');
    //verifica se foi digitado alguma coisa no input. Se foi, adiciona ao elemento de texto que estava vazio
    if(inputValue !== ""){
        textElement = document.createTextNode(inputValue);
    }else{
        textElement = document.createTextNode('Texto não preenchido')
    }
    //adiciona o texto ao novo elemento criado
    novoElementoParagrafo.appendChild(textElement)
    //busca o elemento pai
    let divElement = document.querySelector('#app');
    //adiciona o novo elemento no nó
    divElement.appendChild(novoElementoParagrafo);
    //limpa o valor de input
    document.querySelector('input').value = '';
}