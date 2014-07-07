$(function() {

	var turn = 1
	var	turnX = []
	var	turnO = []
	// when someone clicks any of the canvas boxes, i want to know what turn it is and then increment the turn
	// a KBbox can only be clicked once
	

		$('td a').on('click',function() {

			if (turn % 2 != 0 ) {
				$('h4').text("Your turn, O")
				$(this).text("O").off('click')
				turnO.push($(this).attr('id'))
			} else {
				$('h4').text("Your turn, X")
				$(this).text("X").off('click')
				turnX.push($(this).attr('id'))
			}
			turn++
		});
	});

	// check for a winner, once a winning combination has been selected, stop game and alert the person who made the winning combination

	function checkForWinner() {

	winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		if (turn >= 5) {
			winningCombination.forEach(function(combo){
				var winner = false
				if (turnO.indexOf(combo[0]) >= 0 && turnO.indexOf(combo[1]) >= 0 && turnO.indexOf(combo[2]) >= 0) {
					winner = true
					alert("O wins")
				} else if {
					(turnX.indexOf(combo[0]) >= 0 && turnX.indexOf(combo[1]) >= 0 && turnX.indexOf(combo[2]) >= 0)
					winner = true
					alert("X wins")
				}
			});
		};
	};
	

// ask the player if they would like to play again

// function playAgain() {

// }

