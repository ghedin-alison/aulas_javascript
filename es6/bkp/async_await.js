//Async e Await
//pode ser utilizado para aguardar a conexão com algum banco de dados
//Para verificar executar o index.html e ver o console

const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10); // gerando um valor aleatorio entre 0 e 9
    setInterval(() => {
        if(valor % 2 === 0){
            resolve(`O valor ${valor} é par!`)
        }else{
            reject(`O valor ${valor} é ímpar!`)
        }
    }, 2000); //simula um intervalo de 2s
});

//await só pode ser utilizado se a função for async
//a função executarPromise aguarda a finalização de novaPromise para só então imprimir consitnuar seu processo.
async function executarPromise(){
    try{
        const response = await novaPromise();
        console.log(response);
    }catch(erro){
        console.log(erro);
    }
}


executarPromise();
