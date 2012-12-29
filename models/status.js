var Status = can.Model({

	/**
	*	FindRandom: Find a random status
	*/
	findRandom: function(params, cb){

		var randomFriend = Math.floor(Math.random()*200) ;
		var randomStatus = Math.floor(Math.random()*50) ;

		FB.api('/me/friends?fields=statuses.limit(1).offset('+randomFriend+').fields(message),name,username&limit=1&offset='+randomStatus, $.proxy(function(response) {

			var friend = response.data[0];
			
			console.log(friend) ;

			if(!friend.statuses) {
				//No status ):
				this.findRandom(params, cb) ; //Just find another one.
			}
			else{

				var status = friend.statuses.data[0] ;
				status.friend_id = friend.id ;

				var deff = $.Deferred() ;
				deff.then(cb) ;
				return deff.resolve(status);

			}


		}, this));

	}

}, {}) ;