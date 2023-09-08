function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "wichita") {
        window.location.href = "14_Wichita.html";
    } else {
        alert("Error.");
    }
}
