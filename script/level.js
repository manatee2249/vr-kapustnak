
var level = 0;

function levelPlus(){
    level++;
    document.getElementById("point").innerHTML = level;
}

function more(){
    alert("Ahoj, Právě můžeš pomoct kapustňákovy :) \n Chěl by si s tebou pohrát, najíst se, \n zkrátka se potřebuje s tebou zabavit.");
}

function goTo(){
    window.location = "sett.html";
}