function calcular_idade(ano_nascimento, nome) {
    const data = new Date(); // gera a data atual
    const idade = data.getFullYear() - ano_nascimento;
    return `${nome} tem ${idade} anos de idade`;
    
}

let age = calcular_idade(1980, "Ana");
console.log(age)

const data = new Date();

console.log(`Mês: ${data.getMonth()}`) //0 - Janeiro, 1 - Fevereiro, ..., 11 - Dezembro 