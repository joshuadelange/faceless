//Mufasa.
$(document).ready(function(){

	function startThaAppNaow(){

		new Profile('#profile') ;
		
		new Statuses('#statuses') ;

		//Gets friend's status
		//me/friends?fields=statuses.limit(1).offset(10).fields(message),name&limit=1&offset=396


	}

	window.fbAsyncInit = function() {
		FB.init({
			appId      : '393049337449640', // App ID
			channelUrl : '//joshuadelange.github.com/faceless/channel.html', // Channel File
			status     : true, // check login status
			cookie     : true, // enable cookies to allow the server to access the session
			xfbml      : true  // parse XFBML
		});

		FB.getLoginStatus(function(response) {

			if(response.status !== 'connected') {

				FB.login(function(response) {
					if (response.authResponse) {
						startThaAppNaow() ;
					} else {
						alert('Really? Just login and authorize us already so we can have some fun.') ;
					}
				});

			}
			else{
				startThaAppNaow();
			}


		});

	};

	(function(d){
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));

})