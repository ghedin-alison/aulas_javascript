// AJAX (XMLHttpRequest) - Assynchronous JavaScript and XML


let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');    
let div = document.querySelector('#app')

btn.onclick = function(){
    // Limpar o conteudo da div
    div.innerHTML = '';

    // instanciando um objeto AJAX
    let ajax = new XMLHttpRequest();

    // Abrir uma conexao (GET, POST, PUT, DELETE....)
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    //Enviar a requisição passamos null pq estamos utilizando o get
    ajax.send(null);

    //Pegar o resultado
    ajax.onreadystatechange = function(){
        //Criar um elemento span
        let spanNone = document.createElement('span');
        
        //Criar uma variavel para receber o texto nome
        let txtNome = '';
        /**
         * ajax.readyState:
         * 0 - antes da conexão ser aberta
         * 1 - após abrir a conexão
         * 2 - headers foram recebidos
         * 3 - carregando o corpo da requisição
         * 4 - os dados estão disponiveis para uso
         */
        if(ajax.readyState === 4){
            if(ajax.status === 200){
                // transformar os dados JSON para Array
                usuario = JSON.parse(ajax.responseText)
                // Verificar se o usuario possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    // criar a imagem para colocar a imagem do usuario
                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');
                    div.appendChild(img);
                }else{
                    txtNome = document.createTextNode(`O usuario ${input.value} não cadastrou o nome`);
                }
                
                // limpar o input
                input.value = '';
            }else{
                txtNome = document.createTextNode(`Não encontrei o usuario ${input.value}`);
                //Adiciona o texto ao span e o span a div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        }
    }

}

