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
        console.log(`${this.nome} está falando que ${msg}`);
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


// this, diz respeito ao objeto que está executando a classe no momento