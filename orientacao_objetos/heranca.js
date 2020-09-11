//  *
//  * FUNCIONARIOS:
//  * nome, sobrenome, email, cpf, funcao, registro
//  * 
//  * 
//  * CLIENTES:
//  * nome, sobrenome, email, cpf , renda
//  * 
//  * FUNÇOES:
//  * Descrição, salario
//  * 
//  * 
//  *
//  * 
//  /

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
        console.log(`${this.nome_completo} portador(a) do cpf:${this._cpf}`)
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
const c1 = new Cliente("Alison", "Ghedin", "alisonjghedin@gmail.com", "099.999.839-32", 8000.00);
const c2 = new Cliente("Francieli", "Ghedin", "franghedin@gmail.com", "035.000.121-32", 8000.00);
console.log(c1);
console.log(c2);
console.log(linha)

c1.data_nasc = '05/10/1980';
console.log(c1);

console.log(linha);
//Métodos complementares
console.log(`Nome completo: ${c1.nome_completo}`);
console.log(`Nome completo: ${c2.nome_completo}`);
console.log(linha);
c1.nome_completo = "João da Silva";
console.log(c1);
c1.imprimir_dados();



console.log(linha);
const programador = new Funcao();
programador.salario = 8000;
programador.descricao = "Desenvolver e testar programas com qualidade"
const suporte = new Funcao();
suporte.salario = 7500;
suporte.descricao = "Manter a maquina funcionando"

const f1 = new Funcionario('Pedro', 'da Silva', 'pedro@gmail.com', '456.879.123.99', programador, '123.456.789.52');
f1.data_nasc = '12.05.1987'
const f2 = new Funcionario('Paulo', 'da Silva', 'paulo@gmail.com', '313.889.561.58', suporte, '123.456.789.53');
f2.data_nasc = '13.08.1989'
console.log(f1);
console.log(f1.funcao.salario);
console.log(f2);
console.log(f2.funcao.salario);
