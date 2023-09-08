function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "the voice of devil") {
        window.location.href = "11_TheVoiceOfDevil.html";
    } else {
        alert("Error.");
    }
}
