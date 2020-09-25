import {soma as somarMais, subtracao} from './helper';
import dobrar from './dobrar'; //declarado como export defaul, não é necessário utilizar chaves
import quadrado, {metade, MEUPI} from './funcoes';
import * as helpers from './helper';

console.log(somarMais(5, 12));
console.log(subtracao(15, 12));
console.log(dobrar(12));
console.log(quadrado(12));
console.log(metade(12));
console.log(metade(12*MEUPI));

console.log(helpers.subtracao(90,45));