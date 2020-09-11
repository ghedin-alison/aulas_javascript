// tratamos erro com Try/catch

try{
    console.log(nome)
}catch(e){
    console.log("Não foi possivel imprimir a variável")
    console.log(e.name);
    console.log(e.message);
}

// Lançando Erros

function dividir(a, b){
    if(a === 0 || b === 0){
        throw("Os valores devem ser maiores que zero");
    }else{
        return(a/b);
    } 
}

try{
    let retorno = dividir(1,2);
    console.log(retorno);
}catch(e){
    console.log("Não foi possivel dividir")
}