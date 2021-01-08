console.log ('Dev: Junior');
console.log('Cadastro de Cliente');

function validarFormulario(){
   
   //Definição de variveis
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var fone = document.getElementById("fone").value;

    //chamando rotinas de validação
    validarNome(nome);
    validarEmail(email);
    validarFone(fone);
}


function validarNome(nome){
    document.getElementById("errNome").innerHTML = ("<span></span>");
    if(nome == ""){
        document.getElementById("errNome").innerHTML = ("<span style='color: red;'>Campo Obrigatório</span>");
        
    }
    else if(!validarNomeSnome(nome)){
        document.getElementById("errNome").innerHTML = ("<span style='color: red;'>Digite nome e sobrenome</span>");
    }
}

function validarEmail(email){
    if(email == ""){
        console.log("email vazio");
    }
}

function validarFone(fone){
    if(fone == ""){
        console.log("telefone vazio");
    }
}

function validarNomeSnome(texto) {
    const regExp1 = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/;
    return regExp1.test(texto);
  }