function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "1982") {
        window.location.href = "2_1982.html";
    } else {
        alert("Error.");
    }
}
