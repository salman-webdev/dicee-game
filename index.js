
//GENERATOR OF RANDOM NUMBER FOR DICE//
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6 ) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", images1);
document.querySelector(".img2").setAttribute("src", images2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
}

//REFRESH PAGE BUTTON//
function refreshPageButton() {
        window.location.reload();
}