describe('Floot-It', function(){

	it('should create a game board with 16 fields', function(){
		var sut = new FloodGame(4);
		var actual = sut.fill(function(){});
		expect(16).toBe(actual.length);
	});

	it('should create a game board with a fill function', function(){
		var sut = new FloodGame(4);
		var actual = sut.fill(function(){
			return 'blue';
		});
		expect(['blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','blue'])
		.toEqual(actual);
	});

	it('should find the "best" field step 1', function(){
		var board = [['blue','yellow','yellow'],['yellow','yellow','blue'],['green','blue','green']]
		var sut = new FloodGameSimulator(board);
		var actual = sut.solve();
		expect({ yellow: 2 }).toEqual(actual);
	});

	it('should find the "best" field step 2', function(){
		var board = [['blue','blue','yellow'],['blue','yellow','blue'],['green','blue','green']]
		var sut = new FloodGameSimulator(board);
		var actual = sut.solve(null,null,null,'yellow');
		expect({ blue : 2, green : 1 }).toEqual(actual);
	});

	it('should find the "best" field step 3', function(){
		var board = [['yellow','yellow','yellow'],['yellow','yellow','blue'],['green','blue','green']]
		var sut = new FloodGameSimulator(board);
		var actual = sut.solve(null,null,null, 'blue');
		expect({ yellow : 5, green : 1 }).toEqual(actual);
	});

	it('should find the "best" field step 4', function(){
		var board = [['blue','blue','blue'],['blue','blue','blue'],['green','blue','green']]
		var sut = new FloodGameSimulator(board);
		var actual = sut.solve(null,null,null, 'blue');
		expect({ green : 6 }).toEqual(actual);
	});

	it('should find the "best" field step 5', function(){
		var board = [['green','green','green'],['green','green','green'],['green','green','green']]
		var sut = new FloodGameSimulator(board);
		var actual = sut.solve(null,null,null, 'green');
		expect({ }).toEqual(actual);
	});

});

// load jasmine htmlReporter
(function() {
  var env = jasmine.getEnv();
  env.addReporter(new jasmine.HtmlReporter());
  env.execute();
}());
