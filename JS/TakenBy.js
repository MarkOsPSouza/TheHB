function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "force me to") {
        window.location.href = "7_ForceMe.html";
    } else {
        alert("Error.");
    }
}
