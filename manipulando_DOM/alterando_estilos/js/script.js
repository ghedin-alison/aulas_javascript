/**
 * As configurações de estilo via javascript segue os mesmos conceitos e atributos utilizados via CSS
 * Obs: onde em CSS usa-se background-color, em javascript usamos backgroundColor
 */


 let botoes = document.querySelectorAll('button')
 
 for(let i =0; i < botoes.length; i++){
     botoes[i].onclick = function (){
        document.querySelector('body').style.backgroundColor = this.getAttribute('class').split('-')[1];
     }
 }
 