function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "13 november 2004") {
        window.location.href = "16_2004.html";
    } else {
        alert("Error.");
    }
}


