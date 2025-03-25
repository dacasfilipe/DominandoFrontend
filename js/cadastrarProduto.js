function carregarCategorias(){
    fetch("http://localhost:8080/api/categorys")
    .then(response => response.json())
    .then(data => {
        // select vai receber o componente select do html
        let select = document.getElementById("category");
        data.forEach(category => {
            let option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.name;
            select.appendChild(option);
        });
    }).catch(error => console.error("Erro ao carregar categorias:",error))
}

document.addEventListener("DOMContentLoaded",function(){
    carregarCategorias();
})

function cadastrarProduto(){
    //cria um objeto usuario
    //converte categorias para numeros
    let selectedCategories = Array.from(document.getElementById("category")
        .selectedOptions).map(option=> Number(option.value));
    let produto = {
        name: document.getElementById("nome").value,
        description: document.getElementById("descricao").value,
        price: document.getElementById("price").value,
        imgUrl: document.getElementById("imgUrl").value,
        categories: selectedCategories
    }
    console.log(produto);
        //envia os dados para a API(backend)
    //substituir o postman(mesmos dados)
    fetch("http://localhost:8080/api/products",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(produto)
    })
    .then(response => response.json())
    .then(data => console.log("Produto salvo:", data))
    .catch(error => console.error("Erro ao salvar produto:", error));
}