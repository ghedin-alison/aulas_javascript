
class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }
    get descricao(){
        return this._descricao
    }
    get salario(){
       return this._salario
    }
    set descricao(descricao){
        return this._descricao = descricao
    }
    set salario(salario){
       return this._salario = salario
    }
};



class Pessoa{
    constructor(nome, sobrenome, email, cpf, data_nasc){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
        this._data_nasc = data_nasc;
    }
    // getters
    get nome(){
        return this._nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    get email(){
        return this._email;
    }
    get cpf(){
        return this._cpf;
    }
    get data_nasc(){
        return this._data_nasc;
    }
    // setters
    set nome(nome){
        return this._nome = nome;
    }
    set sobrenome(sobrenome){
        return this._sobrenome = sobrenome;
    }
    set email(email){
        return this._email = email;
    }
    set cpf(cpf){
        return this._cpf = cpf;
    }
    set data_nasc(data_nasc){
        return this._data_nasc = data_nasc;
    }
    //Métodos extras
    get nome_completo(){
        return `${this._nome} ${this._sobrenome}`
    }
    set nome_completo(nome_completo){
        // separa o nome em uma array determinada por espaços(['nome', 'nomedomeio', 'sobrenome')
        nome_completo = nome_completo.split(' '); 
        
        // extrai o primeiro item do array
        this._nome = nome_completo.shift();
        // o restante do array, agrupa novamente em uma string, separado por espaços
        this._sobrenome = nome_completo.join(' ');
    }
    imprimir_dados(){
        console.log(`${this.nome_completo} \nPortador(a) do cpf:${this._cpf}`)
    }
}


class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }
    // getters
    get funcao(){
        return this._funcao;
    }
    get registro(){
        return this._registro;
    }
    // setters
    set funcao(funcao){
        return this._funcao = funcao;
    }
    set registro(registro){
        return this._registro = registro;
    }
    // Sobrescrita de método - overwriting
    imprimir_dados(){
        super.imprimir_dados();
        console.log(`Função: ${this._funcao.descricao} \nRegistro:${this._registro} \nSalario: ${this.funcao.salario}`)
    }
};

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }
    // getters
    get renda(){
        return this._renda;
    }
    // setters
    set renda(renda){
        return this._renda = renda;
    }
};

const linha = "====================================================================================";

const prog1 = new Funcao("Programador", 8764,25)
const func1 = new Funcionario('Sebastião', 'Salgado', 'sebastiao@gmail.com', '564.654.396-17', prog1, '56499');
console.log(func1);
func1.imprimir_dados();
console.log(linha);

const c1 = new Cliente('Moisés', 'Araujo', 'moises@gmail.com', '716.912.743-22', 6500.00);
c1.imprimir_dados();

//Polimorfismo, dois objetos do mesmo tipo, tendo comportamentos diferentes(Cliente e funcionario são pessoa.)