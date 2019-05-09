const root = document.getElementById('root');
const authors = document.querySelector('.authors');

fetch('https://reqres.in/api/users')
    //method: 'GET',

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.data.forEach(pessoas => {

            const div = document.createElement('div');
            div.setAttribute('class', 'card');
            div.setAttribute('id', pessoas.id);

            const name = document.createElement('h1');
            name.textContent = pessoas.first_name + ' ' + pessoas.last_name;

            const email = document.createElement('p');
            email.textContent = pessoas.email;

            const botao = document.createElement('button');
            botao.setAttribute('data-id', pessoas.id);
            botao.textContent = 'x';

            botao.addEventListener("click", () => {
                const thisCard = botao.parentElement;
                const cardPai = thisCard.parentElement;

                fetch('https://reqres.in/api/users', {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'id': botao.getAttribute('data-id')
                    })
                })
                    .then(() => {
                        cardPai.removeChild(thisCard)
                    })
                    .catch((erro) => {
                        console.log(erro)
                    })
                })

                authors.appendChild(div);
                div.appendChild(name);
                div.appendChild(email);
                div.appendChild(botao);
            })

        })

            .catch(function (erro) {
                console.log(erro)
            })