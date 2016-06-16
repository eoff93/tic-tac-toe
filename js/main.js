
startGame();

// Start the game and say who gets to start
function startGame() {
  clearBoard();

  sign = "X";
  if (Math.random() < 0.5) {
    sign = "O";
  }
  winner = null;
  setMessage(sign + " gets to start.")
}

// Set the introductory or win message
function setMessage(msg) {
 document.getElementById("message").innerHTML = msg;
}

// Check if a field is occupied, then play the current sign
function nextMove(square) {
  if (winner !== null) {
    setMessage(winner + " already won the game.");
  } else if (square.innerHTML === "") {
    square.innerHTML = sign;
    switchTurn();
  } else {
    setMessage("That square is already used.")
  }
}



// Checks the victory condition, if false changes the sign
function switchTurn() {
  if (checkWin(sign)) {
    setMessage("Congratulations " + sign + ", you won!");
    winner = sign;
  } else if(sign === "X") {
    sign = "O";
    setMessage("It's " + sign + "'s turn.");
  } else {
    sign = "X";
    setMessage("It's " + sign + "'s turn.");
  }

}

// Check a row, column or diagonal
function checkThree(a, b, c, move) {
  return (getBox(a) == move && getBox(b) == move && getBox(c) == move);
}


// Check every victory condition
function checkWin(move) {
  return checkThree(1, 2, 3, move) ||
         checkThree(4, 5, 6, move) ||
         checkThree(7, 8, 9, move) ||
         checkThree(1, 4, 7, move) ||
         checkThree(2, 5, 8, move) ||
         checkThree(3, 6, 9, move) ||
         checkThree(1, 5, 9, move) ||
         checkThree(3, 5, 7, move);
}

// Get the HTML value of an ID element
function getBox(number) {
  return document.getElementById("s" + number).innerHTML;
}

// Clears the board with empty html
function clearBoard() {
  for (var i = 1; i <= 9; i++) {
    document.getElementById("s" + i).innerHTML = "";
  }
}
