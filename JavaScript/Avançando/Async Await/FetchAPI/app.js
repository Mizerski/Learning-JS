/*

    Usando Fetch API para fazer requisições HTTP

    A Fetch API fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece um método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

    O método fetch() toma um argumento - o caminho para o recurso que você quer buscar - e retorna uma Promise que é resolvida com a resposta (response) a essa requisição.

    A resposta é um objeto Response que contém informações sobre a resposta HTTP, como o status da requisição, o tipo de conteúdo, e o corpo da resposta.

    A Fetch API é uma maneira moderna e mais poderosa de fazer requisições HTTP, e é uma alternativa ao XMLHttpRequest.

*/



document.getElementById('button').addEventListener('click', loadNextPage);

function loadNextPage() {
    fetch('index_2.html')
        .then(responta => {
            return responta.text();
        })
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(error => {
            console.log(error);
        });
}


