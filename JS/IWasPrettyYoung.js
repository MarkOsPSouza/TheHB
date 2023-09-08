function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "i've never seen anything like this") {
        window.location.href = "4_I'veNeverSeen.html";
    } else {
        alert("Error.");
    }
}
