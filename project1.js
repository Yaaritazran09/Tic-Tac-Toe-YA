var y = "x";
var Xscore = 0;
var Oscore = 0;

function generateGame(){
    x = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counter = 0;

    document.getElementById("game-board").innerHTML=" ";
    var buttonId = 0
    for (row = 0; row < 3; row++){
        for(let col = 0; col < 3; col++){
        var button = document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("class", "grid-cell");
        button.setAttribute("onClick", "markCheck(this)");
        button.setAttribute("value", " ");
        document.getElementById("game-board").appendChild(button);
        button.setAttribute("id", buttonId)
        buttonId++
        console.log(buttonId)
        }
        var breakline = document.createElement("br");
        document.getElementById("game-board").appendChild(breakline);
    }
}

const patterns= [[0,0,0,1,1,1,0,0,0],
[1,1,1,0,0,0,0,0,0],
[0,0,0,0,0,0,1,1,1],
[1,0,0,0,1,0,0,0,1],
[1,0,0,1,0,0,1,0,0],
[0,1,0,0,1,0,0,1,0],
[0,0,1,0,0,1,0,0,1],
[0,0,1,0,1,0,1,0,0]]

var x = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// var x = "x"

var counter = 0;

function markCheck(obj){
    counter = counter + 1
    obj.setAttribute("disabled", "disabled");
    if (y=="x"){
        obj.setAttribute("value", "x");
        obj.setAttribute("class", "red-player");
        y = "o";
        console.log("player x marked " + obj.id)
        x[obj.id] = 1;
        // console.log(x)
    }
    else if (y=="o") {
        obj.setAttribute("value", "o");
        obj.setAttribute("class", "green-player");
        y = "x";
        console.log("player o marked " + obj.id)
        o[obj.id] = 1;
        // console.log(o)
    }
    var xwin = checkPlayerHasAnyWinningPattern(x);
    var owin = checkPlayerHasAnyWinningPattern(o);

    if (counter == 9 && !xwin && !owin) {
        window.alert("Tie! The game has ended!");
        console.log("player x " + x);
        console.log("player o " + o);
    }
    if (xwin == true){
        Endgame();
        window.alert("player x has won!");
        console.log("player x " + x);
        console.log("player o " + o);
        Xscore++;
        document.getElementById("Xscore").innerHTML = Xscore;
    }

    else if (owin == true){
        Endgame();
        window.alert("player o has won!");
        console.log("player x " + x);
        console.log("player o " + o);
        Oscore++;
        document.getElementById("Oscore").innerHTML = Oscore;
    }
}

function iswinningpattern(patterna, moves){
    check_pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i<9; i++){
        check_pattern[i] = patterna[i]*moves[i]
    }
    for (let j = 0; j<9; j++){
        if (check_pattern[j] != patterna[j]){
            return false;
        }
    }
    return true;
}

function checkPlayerHasAnyWinningPattern(moves){
    for (let i = 0; i<8; i++){
        var answeri = iswinningpattern(patterns[i], moves);
        if (answeri == true){
            return true;
        }
    }
    return false
}

function Endgame(){
    for (let buttonId = 0; buttonId < 9; buttonId++){
        document.getElementById(buttonId).setAttribute("disabled", "disabled");
    }
}

function reset(){
    document.getElementById("Xscore").innerHTML = Xscore = 0;
    document.getElementById("Oscore").innerHTML = Oscore = 0;
    generateGame();
}