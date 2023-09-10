// Esta é uma função chamada "Form" que será executada quando a página carregar.
function Form() {
    // Encontramos elementos HTML com as classes '.form' e '.result' e armazenamos em variáveis.
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const createPerson = []; // Criamos um array vazio chamado 'createPerson' para armazenar informações das pessoas.

    // Aqui começamos a escutar um evento chamado 'submit' (enviar) no formulário.
    form.addEventListener('submit', function (event) {
        // Impedimos o comportamento padrão do formulário de recarregar a página.
        event.preventDefault();

        // Capturamos os valores inseridos nos campos de entrada (nome, sobrenome, altura e peso).
        const firstName = form.querySelector('.firstName').value;
        const lastName = form.querySelector('.lastName').value;
        const height = form.querySelector('.height').value;
        const weight = form.querySelector('.weight').value;

        // Criamos um objeto chamado 'person' com as informações capturadas.
        const person = {
            name: firstName,
            lastName: lastName,
            height: height,
            weight: weight
        };

        // Adicionamos esse objeto ao array 'createPerson'.
        createPerson.push(person);

        // Chamamos uma função chamada 'displayResults' para exibir os resultados na página.
        displayResults();
    });

    // Esta função é responsável por exibir os resultados na página.
    function displayResults() {
        // Limpa o conteúdo dentro do elemento HTML com a classe '.result'.
        result.innerHTML = '';

        // Iteramos sobre o array 'createPerson' para exibir cada pessoa na página.
        createPerson.forEach((person, index) => {
            // Criamos um parágrafo e definimos seu conteúdo com as informações da pessoa.
            const paragraph = document.createElement('p');
            paragraph.textContent = `Person ${index + 1}:
                        Name: ${person.name},
                        Last Name: ${person.lastName},
                        Height: ${person.height},
                        Weight: ${person.weight}`;

            // Adicionamos o parágrafo ao elemento HTML com a classe '.result'.
            result.appendChild(paragraph);
        });
    }
}

// Chamamos a função 'Form' para iniciar o processo quando a página carregar.
Form();
