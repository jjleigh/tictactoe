$(document).ready(function() {
		var turn = 1
		var	turnX = []
		var	turnO = []
	function play() {
		
		// when someone clicks any of the canvas boxes, i want to know what turn it is and then increment the turn
		// a box can only be clicked once	
		$('td a').on('click',function() {

			if (turn % 2 != 0 ) {
				$('h4').text("Your turn, O");
				$(this).text("O").off('click');
				turnO.push(parseInt($(this).parent().attr('id')));
				console.log(turnO);
			} else {
				$('h4').text("Your turn, X");
				$(this).text("X").off('click');
				turnX.push(parseInt($(this).parent().attr('id')));
				console.log(turnX);
			}
			turn++
			if (turn >= 5) { 
				checkForWinner();
			}
		});
	};

	play();
	// check for a winner, once a winning combination has been selected, stop game and alert the person who made the winning combination
 //  check to see if each player is a winner only on their turn
	function checkForWinner() {
		winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
				
				winningCombination.forEach(function(combo){
					var winnerO = false
					var winnerX = false
					if (turnO.indexOf(combo[0]) >= 0 && turnO.indexOf(combo[1]) >= 0 && turnO.indexOf(combo[2]) >= 0) {
						winnerO = true
						alert("O wins")
						playAgain();
					} else if (turnX.indexOf(combo[0]) >= 0 && turnX.indexOf(combo[1]) >= 0 && turnX.indexOf(combo[2]) >= 0){
						winnerX = true
						alert("X wins")
						playAgain();
					}
			});
	};

	function playAgain() {

	// ask the player if they would like to play again. if no then leave the screen as if
	// if yes then reset the screen and the variables

		var answer = prompt("Would you like to play again?");
	 		if (answer == "yes") {
				location.reload();
			}
	};
});
