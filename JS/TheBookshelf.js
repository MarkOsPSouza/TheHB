function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "nightmares") {
        window.location.href = "13_Nightmares.html";
    } else {
        alert("Error.");
    }
}
