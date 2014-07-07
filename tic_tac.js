$(function() {

	var turn = 1

	// when someone clicks any of the canvas boxes, i want to know what turn it is and then increment the turn

	$('td a').on('click',function() {

		if (turn % 2 == 0 ) {
			$(this).text("X")
		} else {
			$(this).text("O")
		}
		turn++
	});

	// 

});
	

// winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

