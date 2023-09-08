function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "esperanto") {
        window.location.href = "8_IDon'tCare.html";
    } else {
        alert("Error.");
    }
}
