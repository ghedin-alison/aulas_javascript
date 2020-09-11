function somar(){
    let soma = 0
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}


let res = somar(7, 8, 9, 15, 18);
//console.log(res);


function imprime_valores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

imprime_valores(1, 8, 4)

function multiplicar(n1=8, n2) {
    if(Number.isSafeInteger(n1) && Number.isSafeInteger(n2)){
        return n1 + n2
    }else{
        return "Não foi possível efetuar o calculo"
    }
}

let m = multiplicar("a", 2);
console.log(m)



