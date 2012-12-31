steal(function(){

	Profile = can.Control({
		//Static
	}, {
		//Prototype

		init: function(el, options){

			el = this.element ;
			User.findMe({}, function(me){
				el.html(can.view('app/profile/profile.ejs', me)) ;
			}) ;

		}

	}) ;

}) ;