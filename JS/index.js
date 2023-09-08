function verificarSenha() {
    var senhaInserida = document.getElementById("continuar").value;

    if (senhaInserida === "1982") { // 1 Senha, 2 Html, 3 Nome Documento Pagina
        window.location.href = "2_1982.html"; //1982

    } else if (senhaInserida === "i was pretty young") {
        window.location.href = "3_IWasPrettyYoung.html"; //I Was Pretty Young

    } else if (senhaInserida === "i've never seen anything like this") {
        window.location.href = "4_I'veNeverSeen.html"; //I've Never Seen

    } else if (senhaInserida === "i was just a child") {
        window.location.href = "5_IWasJustAChild.html"; //I Was Just a child

    } else if (senhaInserida === "taken by those hands") {
        window.location.href = "6_Takenby.html"; //Taken By Those Hands

    } else if (senhaInserida === "force me to") {
        window.location.href = "7_ForceMe.html"; //Force Me To

    } else if (senhaInserida === "esperanto") {
        window.location.href = "8_IDon'tCare.html"; //It's Always black here

    } else if (senhaInserida === "it's always black here") {
        window.location.href = "9_AlwaysBlack.html"; //Always Black

    } else if (senhaInserida === "absolutely alone") {
        window.location.href = "10_AbsolutelyAlone.html"; //Absolutely Alone

    } else if (senhaInserida === "the voice of devil") {
        window.location.href = "11_TheVoiceOfDevil.html"; //Under

    } else if (senhaInserida === "i heard his voice behind the bookshelf") {
        window.location.href = "12_TheBookShelf.html"; //The BookShelf

    } else if (senhaInserida === "nightmares") { 
        window.location.href = "13_Nightmares.html"; //Nightmares

    } else if (senhaInserida === "wichita") {
        window.location.href = "14_Wichita.html"; 

    } else if (senhaInserida === "drawing the line in mississippi") {
        window.location.href = "15_DrawingInMississippi.html";

    } else if (senhaInserida === "13 november 2004") {
        window.location.href = "16_2004.html"; 

    } else if (senhaInserida === "2004") {
        window.location.href = "Obscure.html"; 

    } else if (senhaInserida === "black paintings") {
        window.location.href = "18_BlackPaintings.html"; 

    } else if (senhaInserida === "the mirror") {
        window.location.href = "19_TheMirror.html"; 



    } else {
        alert("Error.");
    }

    
}