function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "absolutely alone") {
        window.location.href = "10_AbsolutelyAlone.html";
    } else {
        alert("Error.");
    }
}
