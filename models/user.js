var User = can.Model({

	/**
	*	FindMe: Sometimes, you just gotta find yourself.
	*	JK, gets current user data from the facebooks.
	*/
	findMe: function(params, cb){

		FB.api('/me', function(response) {

			var deff = $.Deferred() ;
			deff.then(cb) ;
			return deff.resolve(response);

		});

	}

}, {}) ;