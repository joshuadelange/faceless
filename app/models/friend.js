steal(function(){

	Friend = can.Model({

		/**
		*	findRandom: Finds random friends
		*/
		findRandom: function(params, cb){

			if(!params.limit) params.limit = 1 ;

			var randomOffset = Math.floor(Math.random()*200) ;

			FB.api('/me/friends?fields=username,name&limit=' + params.limit + '&offset=' + randomOffset, function(response) {
				
				var deff = $.Deferred() ;
				deff.then(cb) ;
				return deff.resolve(response);

			});

		}

	}, {}) ;

});