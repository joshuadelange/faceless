var Statuses = can.Control({
	//Static
}, {
	//Prototype

	init: function(el, options){

		//Start off with adding a status
		this.addStatus() ;

	},

	addStatus: function(){

		var el = this.element,
			self = this ;

		Friend.findRandom({limit:3}, function(friends){
			Status.findRandom({}, function(status){
				el.find('#status-list').append(can.view('statuses/status.ejs', {
					status: status,
					friends: friends
				})) ;
				$('[rel="tooltip"]').tooltip();

				var newStatus = el.find('.status').last() ;
				el.css('height', el.height() + newStatus.outerHeight(true)) ;

				$('html, body').animate({
					scrollTop: newStatus.offset().top
				},'slow');

			}) ;
		}) ;


	},

	'.loadStatus click': function(){
		this.addStatus();
	},

	'.friend click': function(el, ev) {

	},

})