function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "the mirror") {
        window.location.href = "19_TheMirror.html";
    } else {
        alert("Error.");
    }
}


