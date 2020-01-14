var ttt = {
	board = [],
	reset : function(){

		ttt.board = [];
		var container = document.getElementById("ttt-game"); 
		container.innerHTML = "";

		for(let i=0; i<9; i++){
			ttt.board.push(null);
			var square = document.createElement("div");
			square.innerHTML = "&nbsp";
			square.dataset.idx = i;
		    square.id = "ttt-" + i;
		    square.addEventListener("click", ttt.play);
		    container.appendChild(square);
		}
	}

	function play(){
		var move = this.dataset.idx;
		ttt.board[move] = 0;
	    this.innerHTML = "O"
	    this.classList.add("player");
	    this.removeEventListener("click", ttt.play);

		if (ttt.board.indexOf(null) == -1) {
			alert("No Winner");
			ttt.reset();
		}


}

