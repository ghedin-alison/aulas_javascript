// JSON - JavaScript object notation

class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    andar(){
        console.log(`${this._nome} ${this._sobrenome} está andando.`);
    }
}

linha = '=========================================================='
const p3 = new Pessoa('Sérgio', 'Reis');
console.log(p3);
console.log(typeof(p3));
console.log(linha);

// Convertendo o objeto JavaScript para Json
const json = JSON.stringify(p3);
console.log(json);
console.log(typeof(json));
console.log(linha);


// JSON todas as chaves estão com aspas duplas
// JSON NÃO EXIBE FUNCOES DO OBJETO. SOMENTE TEXTO.


//Convertendo de JSON para Objeto Javascript
const obj = JSON.parse(json);
console.log(obj);
console.log(obj);
console.log(typeof(obj));
console.log(linha);


// Se não cumprir o formato de um JSON, na hora de converter dá erro.
// Se tem que utilizar aspas duplas dentro do objeto JSON, por fora tem q utilizar aspas