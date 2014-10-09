var FloodGame = function(fields){
	var self = this;
	var board = [];

	self.fill = function(fillValue){
		if(!fillValue) throw new Error('No fill function.');

		for (var x = 0; x < fields; x++) {
			var line = [];
			for (var y = 0; y < fields; y++) {
				line.push(fillValue());
			}
			board.push(line);
		};
		return _.flatten(board);
	};
};

var FloodGameSimulator = function(board){
	var self = this;
	self.steps = 0;

	self.solve = function(x, y, colors, choosen){
		if(!x) x = 0;
		if(!y) y = 0;
		var right, bottom;

		if(!colors) {

			colors = {};
			if(!choosen) var choosen = board[0][0];
			colors[choosen] = 0;
		}

		if(board[x] && board[x][y+1]) right = board[x][y+1];
		
		if(board[x+1] && board[x+1][y]) bottom = board[x+1][y];

		if(!colors[right] && right) colors[right] = 0;
		if(!colors[bottom] && bottom) colors[bottom] = 0;

		if(right) colors[right] += 1;
		if(bottom) colors[bottom] += 1;

		if(x === board.length) return colors;
		if(y === board.length) return colors;

		if(right === board[x][y]) self.solve(x,y+1,colors);
		if(bottom === board[x][y]) self.solve(x+1,y,colors);

		delete colors[choosen];

		return colors;
	};

};
