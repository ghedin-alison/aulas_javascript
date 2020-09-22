let btn = document.querySelector('#btn')
let div = document.querySelector('#app')

let promisse = function(){
    return new Promise(function(resolve, reject){
        let github_user = document.querySelector('input[name=github_user]').value;
        
        let ajax = new XMLHttpRequest();
        ajax.open('GET', `http://api.github.com/users/${github_user}`);
        ajax.send(null);

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText));
                }else{
                    reject(`Não foi encontrado usuário informado`)
                }
            }
        }
    });
};


btn.onclick = function(){
    // Limpar a div
    div.innerHTML = '';

    //Criar o elemento span
    let spanNome = document.createElement('span');

    //Criar a variável nome
    let textNome = '';

    //Executando a promisse
    promisse()
        //resolve(sucesso)
        .then(function(response){
            // Se o usuario tem nome
            if(response['name'] !== null){
                textNome = document.createTextNode(response['name']);

                let img = document.createElement('img');
                img.setAttribute('src', response['avatar_url']);
                img.setAttribute('alt', response['name']);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                textNome = document.createTextNode('Usuário sem nome cadastrado.');
            }
            // Adiciona texto ao span e span a div
            spanNome.appendChild(textNome);
            div.appendChild(spanNome)
        })
        .catch(function(error){
            textNome = document.createTextNode(error);
            //Adiciona o texto a span e span a div
            spanNome.appendChild(textNome);
            div.appendChild(spanNome)
        })
}