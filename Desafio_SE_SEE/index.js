var cep = document.getElementById("cep");
var button = document.getElementById("cadastrar");
var localização;

function pegarInfoCep() {

    let url = "https://viacep.com.br/ws/" + cep.value + "/json/"

    fetch(url, {
    }).then((respostaProt) => {
        return respostaProt.json();
    }).then((respostaObj) => {
        localização = respostaObj;
        console.log(respostaObj)
        preencherUsuario(respostaObj)
    }).catch((error) => {
        console.warn("Error na hora de pegar o cep");
        console.warn(error);
    })
}

function preenchercampos() {
    var rua = document.getElementById("rua");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    var ibge = document.getElementById("ibge");

    rua.value = localização.logradouro
    bairro.value = localização.bairro
    cidade.value = localização.localidade
    estado.value = localização.uf
    ibge.value = localização.ibge
}

function cepCompleto(){
    console.log(cep.value.length)
    if(cep.value.length == 8){
        pegarInfoCep();
    }
}

function preencherUsuario(cadastro){
    var usuariodiv = document.getElementById("usuario");

    usuariodiv.style.visibility = "visible"

    var rua = document.getElementById("rua");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    var ibge = document.getElementById("ibge");

    rua.innerHTML=cadastro.logradouro
    bairro.innerHTML=cadastro.bairro
    cidade.innerHTML=cadastro.localidade
    estado.innerHTML=cadastro.uf
    ibge.innerHTML=cadastro.ibge
}