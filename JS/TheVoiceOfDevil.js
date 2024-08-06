function verificarSenha() {
    var senhaInserida = document.getElementById("codigo").value;

    if (senhaInserida === "i heard his voice behind the bookshelf") {
        window.location.href = "12_TheBookShelf.html";
    } else {
        alert("Error.");
    }
}
