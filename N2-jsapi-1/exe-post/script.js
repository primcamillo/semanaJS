const button = document.getElementById("send_form");

button.addEventListener("click", (evento) => {
    console.log("oi")
    evento.preventDefault();

    let nome = document.getElementById('first_name').value;
    let sobrenome = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'first_name': nome,
            'last_name': sobrenome,
            'email': email,
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById ('message')
            .textContent ='sucesso'
        })
        .catch((erro) => {
            console.log(erro)
        })

})