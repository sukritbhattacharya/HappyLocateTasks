var ttt = {
  board : [], 
  reset : function () {
  

    
    ttt.board = [];
    var container = document.getElementById("ttt-game");
    container.innerHTML = "";

    for (let i=0; i<9; i++) {
      ttt.board.push(null);
      var square = document.createElement("div");
      square.innerHTML = "&nbsp;";
      square.dataset.idx = i;
      square.id = "ttt-" + i;
      square.addEventListener("click", ttt.play);
      container.appendChild(square);
    }
  },

  play : function () {

    // moves are Player-O and AI- X
    var move = this.dataset.idx;
    ttt.board[move] = 0;
    this.innerHTML = "O"
    this.classList.add("player");
    this.removeEventListener("click", ttt.play);

    // if no winner
    if (ttt.board.indexOf(null) == -1) {
      alert("No winner");
      ttt.reset();
    }

    else {
      move = ttt.theAI();
      
      ttt.board[move] = 1;
      var square = document.getElementById("ttt-" + move);
      square.innerHTML = "X"
      square.classList.add("computer");
      square.removeEventListener("click", ttt.play);
    }

    // Check win
    win = null;
    // Check rows
    for (let i=0; i<9; i+=3) {
      if (ttt.board[i]!=null && ttt.board[i+1]!=null && ttt.board[i+2]!=null) {
        if ((ttt.board[i] == ttt.board[i+1]) && (ttt.board[i+1] == ttt.board[i+2])) { win = ttt.board[i]; }
      }
      if (win !== null) { break; }
    }
    // Check columns
    if (win === null) {
      for (let i=0; i<3; i++) {
        if (ttt.board[i]!=null && ttt.board[i+3]!=null && ttt.board[i+6]!=null) {
          if ((ttt.board[i] == ttt.board[i+3]) && (ttt.board[i+3] == ttt.board[i+6])) { win = ttt.board[i]; }
          if (win !== null) { break; }
        }
      }
    }
    // Check Diagonal
    if (win === null) {
      if (ttt.board[0]!=null && ttt.board[4]!=null && ttt.board[8]!=null) {
        if ((ttt.board[0] == ttt.board[4]) && (ttt.board[4] == ttt.board[8])) { win = ttt.board[4]; }
      }
    }
    if (win === null) {
      if (ttt.board[2]!=null && ttt.board[4]!=null && ttt.board[6]!=null) {
        if ((ttt.board[2] == ttt.board[4]) && (ttt.board[4] == ttt.board[6])) { win = ttt.board[4]; }
      }
    }

    // when winner
    if (win !== null) {
      alert("WINNER - " + (win==0 ? "Player" : "Computer"));
      ttt.reset();
    }
  },

  theAI : function () {
    // finding the empty slots
    var open = [];
    for (let i=0; i<9; i++) {
      if (ttt.board[i] === null) { open.push(i); }
    }

    // Randomly choose empty slot
    var random = Math.floor(Math.random() * (open.length-1));
    return open[random];
  }
};
window.addEventListener("load", ttt.reset);