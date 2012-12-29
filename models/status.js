var Status = can.Model({

	/**
	*	FindRandom: Find a random status
	*/
	findRandom: function(params, cb){

		var randomFriend = Math.floor(Math.random()*200) ;
		var randomStatus = Math.floor(Math.random()*50) ;

		FB.api('/me/friends?fields=statuses.limit(1).offset('+randomFriend+').fields(message),name,username&limit=1&offset='+randomStatus, $.proxy(function(response) {

			var friend = response.data[0];
			
			if(!friend.statuses) {
				//No status ):
				this.findRandom(params, cb) ; //Just find another one.
			}
			else{

				var status = friend.statuses.data[0] ; //Get the status from the friend object
				delete friend.statuses ; //Remove the status from the friend obj
				status.friend = friend ; //Add the friend obj to the status

				var deff = $.Deferred() ;
				deff.then(cb) ;
				return deff.resolve(status);

			}


		}, this));

	}

}, {}) ;