// Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    // Limpa a div
    div.innerHTML = '';

    // Criar o span
    let span = document.createElement('span');

    // Criar a variavel nome
    let txtNome = '';

    // Recuperar input
    let github_user = document.querySelector('input[name=github_user]');
    let user = github_user.value

    github_user.value = '';
    
    // GET, POST, PUT, DELETE
    axios.get(`http://api.github.com/users/${user}`)
        .then(function(response){
            // em axios todas as info vem como response.data.xxxx
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name)

                let img = document.createElement('img')
                img.setAttribute('src', response.data.avatar_url)
                img.setAttribute('alt', response.data.name)
                img.setAttribute('width', '100px')
                img.setAttribute('height', '100px')

                div.appendChild(img)
            }else{
                txtNome = document.createTextNode('Usuário sem nome cadastrado.')
            }
            //Adiciona nome a span e span a div
            span.appendChild(txtNome)
            div.appendChild(span)

        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possível realizar a requisição.')
            //Adiciona nome a span e span a div
            span.appendChild(txtNome)
            div.appendChild(span)

        });
};
