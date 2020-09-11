// let variavel = "global";

// function imprimir() {
//     console.log(variavel);
// }


// function outra() {
//     let variavel = "outra";
//     imprimir();
// }

// outra(); // imprime global

// Closure é o escopo de cada função.

let variavel = "global";

function externa() {
    let variavel = "local";

    function interna() {
        return variavel;
    }
    return interna;
}


let executa = externa();
console.log(executa()); //local


/**
 * Closure é o contexto lexico, escopo de funções
 */
