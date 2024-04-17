var usuarioCadastrado = {
    nome : "Admin",
    senha: "root"
}
function cadastro(){

    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    var usuarioNovo = {
        nome: nome,
        senha:senha
    }
    if(usuarioNovo.nome && usuarioNovo.senha){
        if(usuarioNovo.nome == usuarioCadastrado.nome){
            if(usuarioNovo.senha == usuarioCadastrado.senha){
            location.replace("usuario_logado.html");
            }
            else{
                alert("senha incorreta");
            }
        }
        else{
            alert("usuário não cadastrado");
        }
    }
    else{
        alert("preencha os campos")
    }
}