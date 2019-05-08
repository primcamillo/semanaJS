var botao = document.querySelector('.button');
botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    var email = document.querySelector('#loginInputEmail')
    var senha = document.querySelector('#loginInputPassword')

    if (email.value == "" || email.value.length == 0){
        mensagem.textContent = 'digite um email valido'
        email.focus()
        return
    } else if (email.value.indexOf('@')<=0 || email.value.indexOf('@')>= email.value.length - 1) {
    mensagem.textContent = "o email informado é invalido"
    return
}else if (senha.value == "" || senha.value.length < 6) {
    mensagem.textContent = 'A senha informada e invalida'
    return
}

mensagem.textContent = 'o email' + email.value + 'foi cadastrado com sucesso'
})










//if (true && true){
//  console.log ('verdade verdade')
//}
//if (true && false){
//    console.log ('verdade verdade')
//}

//  if (false && true){
//console.log('verdade verdade')
//}if (false && false) {
//    console.log('verdade verdade')
//}
//if (true  true) {
//    console.log('verdade verdade')
//}