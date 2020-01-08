/* constants */


/* state variables */
let board;
let turn = 'X';

/*element references*/
const squares = Array.from(document.querySelectorAll('#board div'));


/* event listeners */

document.getElementById('board').addEventListener('click', handleTurn);


/* functions */

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
 };


function init() {
	board = [
	'', '', '',
	'', '', '',
	'', '', ''
	];

	render();

};



function render() {
	board.forEach(function(mark,index) {
		squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    };

 init();
