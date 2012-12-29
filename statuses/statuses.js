Statuses = can.Control({}, {

	init: function(el, options){
		
		el = this.element ;

		Friend.findRandom({limit:3}, function(friends){
			Status.findRandom({}, function(status){
				el.html(can.view('statuses/status.ejs', {
					status: status,
					friends: friends
				})) ;
			}) ;
		})

	},

})