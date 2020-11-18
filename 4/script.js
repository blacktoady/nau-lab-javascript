function rollDice(){
    var dice1 = document.querySelector("#dice1");
    var dice2 = document.querySelector("#dice2");
    var status = document.querySelector("#status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    dice1.innerHTML = d1;
    dice2.innerHTML = d2;

    if (d1 == d2) {
        status.innerHTML = "Draw!";
    }   else if (d1 > d2) {
        status.innerHTML = "Player 1 Win!";
    }   else if (d1 < d2) {
        status.innerHTML = "Player 2 Win!";
    }   else {
        alert("something went wrong");
    }
}