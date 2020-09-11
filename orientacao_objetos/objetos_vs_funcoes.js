// Criando objeto através de factory function

const pessoa1 = (nome, sobrenome) => {
    return{
        andar: () => console.log(`${nome} ${sobrenome} está andando.`)
    }
};

const p1 = pessoa1('Ana', 'da Silva')
console.log(p1);
console.log(typeof(p1));
p1.andar();
linha = '============================================================';
console.log(linha);

//Criando objeto através de uma função construtora
function pessoa2(nome, sobrenome) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._andar = function () {
        console.log(`${nome} ${sobrenome} está andando.`);
    }
}

const p2 = new pessoa2('Antônio', 'Silveira');
console.log(p2);
console.log(typeof(p2));
p2._andar();

linha = '============================================================';
console.log(linha);

//Criando objeto através de uma classe

class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    andar(){
        console.log(`${this._nome} ${this._sobrenome} está andando.`);
    }
}

const p3 = new Pessoa('Sérgio', 'Reis');
console.log(p3);
console.log(typeof(p3));
p3.andar();
