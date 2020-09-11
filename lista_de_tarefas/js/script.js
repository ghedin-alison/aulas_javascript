//tratar o input
let input = document.querySelector('input[name=tarefa]');

//tratar o botao
let cadastrar = document.querySelector('#botao');

//tratar a lista
let lista = document.querySelector('#lista');

//obter a classe card
let card = document.querySelector('.card');

//pra que as tarefas sejam carregadas de acordo com o que foi armazenado no localstorage(nomearmaz.) ou [];
tarefas = JSON.parse(localStorage.getItem('tarefas') || [])

function renderizarTarefas(){
    //Limpar novamente a tela
    lista.innerHTML = "";

    for(tarefa of tarefas){
        //Cria um novo elemento
        let itemLista = document.createElement('li');

        //adiciona atributos(classe) ao novo elemento
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //adicionar evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        //cria uma variavel de texto
        let itemTexto = document.createTextNode(tarefa);

        //adiciona a variavel de texto ao novo elemento
        itemLista.appendChild(itemTexto);

        //adiciona a acao a lista de acoes
        lista.appendChild(itemLista)
    }
};

renderizarTarefas();

cadastrar.onclick = function(){
    //capturar o que vem do input
    let novaTarefa = input.value;
    //limpar msg de erro - span
    removerSpan();
    //verificar se foi digitada alguma tarefa
    if(novaTarefa !== ""){
        //atualizar a lista de tarefas
        tarefas.push(novaTarefa) ;
        //Executar a funcao para renderizar a lista de tarefas
        renderizarTarefas();
        //Salvar os dados no storage
        salvardadosStorage();
        //Limpa o input
        input.value = "";
    }else{
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');
        let msg = document.createTextNode('Favor informar a tarefa!!');
        span.appendChild(msg);
        card.appendChild(span);
    }

}

function removerSpan(){
    let spans = document.querySelectorAll('span');
    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}


function deletarTarefa(tar){
    //Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1)
    //Renderiza a tela
    renderizarTarefas();
    //Salvar os dados no storage
    salvardadosStorage();
}

function salvardadosStorage(){
    //Todo navegador Web possui essa capacidade
    //(arm. local).(setar)('nomedearmaz.', dados_formato JSON)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

//diferença entre array e JSON.stringify
//console.log(tarefas);
//console.log(JSON.stringify(tarefas))
