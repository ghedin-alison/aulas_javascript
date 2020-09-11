class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    
    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando: ${msg}`);
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo`);
    }
}

// Funções dentro de classes passam a se chamar método e não é mais necessário a palavra func

class Carro{
    constructor(modelo){
        this._marca = "Honda";
        this._modelo = modelo;
    }
    get marca(){
        return this._marca;
    }
    
    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }    
}

// Forma 1 de instanciar objetos
const curso = new Object();
curso.nome = "Programação em JavaScript";
curso.preco = 25.00;
console.log(curso);
curso['qtd_alunos'] = 25;
console.log(curso);
delete curso['qtd_alunos'];
console.log(curso);
linha = '================================================================================';
console.log(linha);

// Forma 2 de instanciar objetos - Objeto literal
const programa = {
    nome: 'photoshop',
    preco: 50.35,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Rua Getulio Vargas',
            numero: 130,
            complemento: 'apto 111',
            bairro: 'Piratininga',
            cidade: 'Osasco',
            estado: 'SP'
        },
        filiais: [
            {cidade: 'Barueri'},
            {cidade: 'Carapicuiba'}
        ]
    }
}

console.log(programa);
console.log(programa.fabricante.filiais);
console.log(programa.fabricante.filiais[0]);
console.log(linha);

// Forma 3 de instanciar objetos
const pessoa = {};
console.log(`tipo da variável pessoa: ${typeof(pessoa)}`)
pessoa.nome = "Angela";
console.log(pessoa);
console.log(linha);

// Forma 4 de instanciar objetos, utilizando uma função construtora.
function Lampada(cor){
    this.cor = cor;
}

const l1 = new Lampada("amarela")
console.log(l1)
console.log(linha);


// Forma 5 de instanciar objetos, a partir de nossas classes
const pessoa_1 = new Pessoa("João", "da Silva");
console.log(pessoa_1.nome) // acessando através do get
pessoa_1.sobrenome = "de Souza" //alterando através do metodo set

pessoa_1.falar("penso, logo existo.")
pessoa_1.comer();

const fit = new Carro("Fit");
fit.imprimir();

