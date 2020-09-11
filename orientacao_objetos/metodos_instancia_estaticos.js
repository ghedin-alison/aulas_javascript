class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca();
        this._modelo = modelo;
    }
    //getters
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    //setters
    set modelo(modelo){
        return this._modelo = modelo;
    }
    imprimir_dados(){
        console.log(`Veículo: ${this._marca} \nmodelo: ${this._modelo}`);
    }
    // declaracao do metodo estatico. Tem que alterar a valorização no metodo construtor
    static retornar_marca(){
        return 'Honda';
    }
}

const carro = new Carro('Fit');
carro.imprimir_dados();

console.log(Carro.retornar_marca()) // acesso ao metodo estatico
console.log(Math.random()); //outro exemplo de classe estática. Detalhe, sempre tem o sinal para executar o metodo().
console.log(Math.PI); //outro exemplo de classe estática. Detalhe, sempre tem o sinal para executar o metodo().
