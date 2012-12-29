Profile = can.Control({}, {

	init: function(el, options){
		
		el = this.element ;
		User.findMe({}, function(me){
			el.html(can.view('profile/profile.ejs', me)) ;
		}) ;

	},

})