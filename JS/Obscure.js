function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "black paintings") {
        window.location.href = "18_BlackPaintings.html";
    } else {
        alert("Error.");
    }
}
