function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "i was just a child") {
        window.location.href = "5_IWasJustAChild.html";
    } else {
        alert("Error.");
    }
}
