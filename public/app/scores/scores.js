steal()
.then(function(){

	Scores = can.Control({
		//Static
	}, {
		//Prototype

		init: function(el, options){
			
			var score = new can.Observe({
				correct: 0,
				wrong: 0
			}) ;

			el.data('score', score) ;
			el.html(can.view('app/scores/scores.ejs', score)) ;

		}

	}) ;

}) ;