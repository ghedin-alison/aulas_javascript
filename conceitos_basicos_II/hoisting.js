console.log(nome);

var nome = "Alison"; // undefined

console.log(nome);

/**
 * Hoisting 
 * só funciona quando declarado com var.
 * não deixa retornar erro, retorna undefined
 * é como se declarasse a variavel antes da utilização e ficasse pronto para setar valor. por isso retorna undefined
 * Se utilizar let e const, isso não acontecerá. Retornará erro.
 */