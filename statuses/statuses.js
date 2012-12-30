var Statuses = can.Control({
	//Static
}, {
	//Prototype

	init: function(el, options){

		//Start off with adding a status
		this.addStatus() ;

	},

	addStatus: function(){

		$('#loader').fadeIn();

		var el = this.element,
			self = this ;

		Friend.findRandom({limit:3}, function(friends){
			Status.findRandom({}, function(status){
				el.find('#status-list').append(can.view('statuses/status.ejs', {
					status: status,
					friends: friends
				})) ;
				$('[rel="tooltip"]').tooltip();

				$('#loader').fadeOut();
				
				var newStatus = el.find('.status').last() ;
				el.css('height', el.height() + (newStatus.outerHeight(true) + 60)) ;

				$('html, body').animate({
					scrollTop: newStatus.offset().top
				},'slow');
		

			}) ;
		}) ;


	},

	'.friend click': function(el, ev) {

		var $guessedFriend = $(el),
			guessedFriend = $guessedFriend.data('friend'),
			$status = $guessedFriend.closest('.status'),
			status = $status.data('status'),
			score = $('#score').data('score') ;

		if(!$status.hasClass('guessed')) {

			$status.addClass('guessed') ;

			//Keep the selected friend, you know, selected
			$guessedFriend.addClass('selected') ;

			if(guessedFriend.id == status.friend.id) {
				//Guessed right!
				$status.find('.guessedCorrect').show() ;
				score.attr('correct', score.attr('correct') + 1) ;
			}
			else{
				$guessedWrong = $status.find('.guessedWrong') ;
				$guessedWrong.find('.correctFriend').html(status.friend.name) ;
				$guessedWrong.show();
				score.attr('wrong', score.attr('wrong') + 1) ;
			}

			$status.find('.result').slideDown('fast') ;

			//Lets play again.
			this.addStatus() ;

		}




	},

})