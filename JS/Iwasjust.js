function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "taken by those hands") {
        window.location.href = "6_TakenBy.html";
    } else {
        alert("Error.");
    }
}
