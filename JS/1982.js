function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "i was pretty young") {
        window.location.href = "3_IWasPrettyYoung.html";
    } else {
        alert("Error.");
    }
}
