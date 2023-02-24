player = 1;
counter = 0;
// On startup Build the board and set up the button function
$(document).ready(function() {
    buildBoard();
    $('.btn').click(function() 
    {
        var $this = $(this);
        //check if available to mark
        if ($this.context.innerHTML != "X" && $this.context.innerHTML != "O") {
            playerTurn($this);
            const h2 = document.getElementById('turn');
            h2.innerHTML = "IT IS YOUR TURN PLAYER " + player + " (" + (player == 1? "X" : "O") + ")";
        } else {
            alert("square already marked");
        }
    })

});

function playerTurn(button) {
    //change text to an X or an O
    console.log(button);
    if (player == 1) {
        button.context.style.color="black";
        button.context.innerHTML = "X";
        counter++;
    } else {
        button.context.style.color="black";
        button.context.innerHTML = "O";
        counter++;
    }

    //set a marker variable and check if its a win after changing
    var marker = (player == 1? "X" : "O");
    if (checkwin(marker)) {
        player == 1? player = 2 : player = 1;
        setTimeout(function() {
            alert("CONGRATULATIONS PLAYER " + player + "!!! YOU WON");
            location.reload();
        });
    } else if (counter == 9) {
        setTimeout(function() {
            alert("You guys drew!! PLAY AGAIN");
            location.reload();
        });
    }
    player == 1 ? player = 2 : player = 1;
}

function checkwin(marker) {
    var divs = document.getElementsByClassName('btn');
    if (checkVertical(marker, divs) || checkHorizontal(marker, divs) || checkDiagonal(marker, divs)) {
        return true;
    } 
    return false;
}

function checkVertical(marker, divs) {
    for (let i = 0; i < 3; i++) {
        if (divs[i].innerHTML == marker && divs[i + 3].innerHTML == marker && divs[i + 6].innerHTML == marker) {
            return true;
        }
    }
    return false;
}

function checkHorizontal(marker, divs) {
    count = 0;
    i = 0;
    while (count < 3) {
        if (divs[i].innerHTML == marker && divs[i + 1].innerHTML == marker && divs[i + 2].innerHTML == marker) {
            return true;
        }
        i+=3;
        count++;
    }
    return false;
}

function checkDiagonal(marker, divs) {
    if ((divs[0].innerHTML == marker && divs[4].innerHTML == marker && divs[8].innerHTML == marker) ||
        (divs[2].innerHTML == marker && divs[4].innerHTML == marker && divs[6].innerHTML == marker)) {
            return true;
        }
    return false;
}

function buildBoard() {

    for (let i = 0; i < 9; i++) {
        const button = document.createElement("button");
        button.innerHTML = "place here";
        button.id = "id" + i;
        button.className = "btn";
        gameBoardDiv = document.getElementById("gameBoard");
        gameBoardDiv.appendChild(button);
    }

    const boton = document.createElement("button");
    boton.innerHTML = "Reset game";
    boton.className = "boton";
    boton.addEventListener ("click", function() {
        location.reload();
    });
    document.body.append(boton);
}

