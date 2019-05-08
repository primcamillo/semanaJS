//pegar um valor do meu imput e dar um console 
//diparar um evento para q pegue o valor do imput, estimular o cod chamar o api, 


// const cep = document.getElementById("cep"); //pegando o elemento cep HTML
// console.log(cep.value)//escrevendo no consoole valor do cep
// cep.addEventListener("focusout", ()=>{
// console.log("FOCUS OUT")
// //console.log('https://viacep.com.br/ws/'+ cep.value +'/json')
// //console.log(`https://viacep.com.br/ws/ ${cep.value} /json`)

// fetch('https://viacep.com.br/ws/'+cep.value+'/json')//espera a url parametro obrigatorio
// .then(function(response){//outra forma de fazer .then((response)=>{codigo aqui}
//     return response.json();// 1o then nos tras uma resposta
// })
// .then(function(data){//outra forma de fazer .then((data)=>{codigo aqui}
// //    
// //pode usar os dados do API
//     //console.log("SUCESSO!!")
//     console.log(data) //para acessar o obj data.localizacao

//     let estado = document.getElementById('estado');
//     estado.value = data.uf;

//     let cidade = document.getElementById('cidade');
//     cidade.value = data.localidade;

//     let bairro = document.getElementById('bairro');
//     bairro.value = data.bairro;

//     let endereco = document.getElementById('endereco');
//     endereco.value = data.logradouro;


// })
// .catch(function(erro){
//     console.log(erro)
// })
// })
//outra forma de escrever o codigo
cep.addEventListener("focusout", ()=>{
    console.log("FOCUS OUT")

let cepVal = cep.value

fetch('https://viacep.com.br/ws/'+cep.value+'/json')
.then((response)=>{
    return response.json();
})
.then ((data)=>{
    //console.log(data)
    //console.log(data.cep)

    document.getElementById("estado").value = data.uf;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("cidade").value = data.localidade;
    document.getElementById("endereco").value = data.logradouro;
    
})
.catch(function(erro){
    console.log(erro)
})
})