
var botao = document.querySelector('.login__button');
var mensagem = document.querySelector('.login__subtitle')


botao.addEventListener('click', function (evento){
    evento.preventDefault();
    var email = document.querySelector('#loginInputEmail')
    var senha = document.querySelector('#loginInputPassword')
    if (email.value == "" || email.value.length == 0) {
        mensagem.textContent = 'digite um email valido'
        email.focus()
        console.log('email')
        return
    }
    else if (email.value.indexOf('@') <= 0 || email.value.indexOf('@') >= email.value.length - 1){
        mensagem.textContent = "o email informado é invalido"
        return
    } else if (senha.value == "" || senha.value.length < 6) {
        mensagem.textContent = 'A senha informada e invalida'
        console.log('senha')
        return
    }
    mensagem.textContent = 'o email' + email.value + 'foi cadastrado com sucesso'
})