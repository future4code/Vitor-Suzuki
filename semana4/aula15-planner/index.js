function novaTarefa() {
    let meuInput = document.getElementById("tarefa").value
    let selector = document.getElementById("dias-semana").value

    // console.log(meuInput)
    // console.log(selector)

    document.getElementById(selector).innerHTML += "<p onclick='tarefaConcluida()'> " + meuInput + "</p>"
    document.getElementById("tarefa").value = ""
    document.getElementById("dias-semana").value = "domingo"

    // -- DESAFIO 1 --

    if (meuInput == "") {
        alert("Digite uma tarefa!");
    }


}
novaTarefa()

    // -- DESAFIO 2 --

function tarefaConcluida() {
    const textoRiscado = document.getElementsByTagName("p");
    for (let i = 0; i < textoRiscado.length; i++) {
        textoRiscado[i].style.setProperty("text-decoration", "line-through");
    }
}
tarefaConcluida()

    // -- DESAFIO 3 --

function removerTudo() {
    document.getElementById(selector).innerHTML = "";
}
