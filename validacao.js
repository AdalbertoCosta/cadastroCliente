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
    if(nome == ""){
        console.log("nome vazio");
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