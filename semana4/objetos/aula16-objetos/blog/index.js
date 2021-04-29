let objectArr = []
function criarPostNoClique() {
    
let titulo = document.getElementById("titulo-post");
let autor = document.getElementById("autor-post");
let conteudo = document.getElementById("conteudo-post");

    const addTitulo = document.getElementById("titulo-post").value;
    const addAutor = document.getElementById("autor-post").value;
    const addConteudo = document.getElementById("conteudo-post").value;

    const postInfos = {
    titulo: addTitulo.value,
    autor: addAutor.value,
    conteudo: addConteudo.value,
  }

    objectArr.push(postInfos)

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    
    // console.log(addTitulo)
    // console.log(addAutor)
    // console.log(addConteudo)
    // console.log(objectArr)
    
    const container = document.getElementById("container-de-posts");
    container.innerHTML += `<h1>${addTitulo}</h1>` 
    container.innerHTML += `<h2>${addAutor}</h2>`
    container.innerHTML += `<p>${addConteudo}</p>`


}
