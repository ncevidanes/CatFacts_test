// Seleciona os elementos HTML com os quais vamos interagir
const paragrafoFato = document.getElementById('fato-gato');
const botaoNovoFato = document.getElementById('novo-fato-btn');

// Função para buscar um fato na API
function buscarFatoDeGato() {
    // Informa ao usuário que estamos carregando
    paragrafoFato.textContent = 'Carregando...';

    // A mágica acontece aqui! O fetch faz a requisição para a URL da API.
    fetch('https://catfact.ninja/fact')
        .then(response => response.json()) // 1. Quando a resposta chegar, converte para o formato JSON.
        .then(data => {
            // 2. Quando a conversão terminar, pegamos os dados (data).
            // A API nos devolve um objeto com uma propriedade "fact".
            paragrafoFato.textContent = data.fact;
        })
        .catch(error => {
            // Se der algum erro na requisição, mostramos no parágrafo.
            console.error('Houve um erro:', error);
            paragrafoFato.textContent = 'Desculpe, não foi possível carregar um fato agora.';
        });
}

// Adiciona um "ouvinte" de evento ao botão. Quando o botão for clicado, a função buscarFatoDeGato será executada.
botaoNovoFato.addEventListener('click', buscarFatoDeGato);

// Chama a função uma vez assim que a página carrega.
document.addEventListener('DOMContentLoaded', buscarFatoDeGato);
