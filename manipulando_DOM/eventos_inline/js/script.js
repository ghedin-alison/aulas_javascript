// function mostrar_alerta() {
//     alert('O botão foi clicado');
// }
const mostrarAlerta = () => alert('O botão foi clicado');
const mudarTexto = (elemento) => elemento.innerHTML = 'Estou avisando...';

function mudarCor() {
    let cores = ['green', 'red', 'blue', 'magenta', 'black', 'orange', 'yellow', 'purple'];
    const numero = Math.floor((Math.random() * cores.length) + 1);
    document.bgColor = cores[numero];
}

function escreverTexto(input) {
    let span = document.getElementById('texto');
    span.innerHTML = input.value;
}