function salvarUsuario(){
    //cria um objeto usuario
    let usuario = {
        name: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        password: document.getElementById("senha").value,
        phone: document.getElementById("phone").value,
        birthDate: document.getElementById("birthDate").value,
        roles: document.getElementById("roles").value
    }
    console.log(usuario);
    //envia os dados para a API(backend)
    //substituir o postman(mesmos dados)
    fetch("http://localhost:8080/api/users",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => console.log("Usuário salvo:", data))
    .catch(error => console.error("Erro ao salvar usuário:", error));
}