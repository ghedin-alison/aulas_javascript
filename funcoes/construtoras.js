// Funções Construtoras

function pessoa(n, s, especie = "humano"){
    // atributos privados, só conseguimos fazer uso dentro da funcao construtora
    let altura = 0.3;
    let peso = 3.5;
    let idade = 0;
    let nome = n;
    let sexo = s;
    
    //atributo publico, pode ser acessado fora da funcao construtora
    this.especie = especie;

    //metodo privado, só conseguimos fazer uso dentro da funcao construtora
    let imprimir_dados = () => console.log(`Nome: ${nome} Idade: ${idade} Peso: ${peso} Altura: ${altura} Sexo: ${sexo} Especie: ${especie}`)

    //metodo publico, conseguimos acessar fora da funcao construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = () => idade;
}


// instanciando um objeto new objeto
const joana = new pessoa("Joana D'arq", "feminino");
console.log(joana)
//console.log(joana.peso) //atributo privado, não tenho acesso retorna undefined
console.log(joana.especie)
joana.fazer_aniversario();
joana.fazer_aniversario();

//Instanciar um novo objeto
const joao = new pessoa("João", "masculino");
joao.fazer_aniversario();
console.log(joao.getIdade());

console.log(typeof(pessoa))  // function 
console.log(typeof(joao))   // object
