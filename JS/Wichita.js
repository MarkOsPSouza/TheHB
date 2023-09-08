function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "drawing the line in mississippi") {
        window.location.href = "15_DrawingInMississippi.html";
    } else {
        alert("Error.");
    }
}
