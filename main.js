//Mufasa.
$(document).ready(function(){

	function startThaAppNaow(){

		$('#loader').fadeIn();

		new Scores('#score') ;

		new Profile('#profile') ;
		
		new Statuses('#statuses') ;

	}

	window.fbAsyncInit = function() {
		FB.init({
			appId      : '393049337449640', // App ID
			channelUrl : '//joshuadelange.github.com/faceless/channel.html', // Channel File
			status     : true, // check login status
			cookie     : true, // enable cookies to allow the server to access the session
			xfbml      : true  // parse XFBML
		});
	}


	$('#login').click(function(){

		FB.getLoginStatus(function(response) {

			if(response.status !== 'connected') {

				FB.login(function(response) {
					if (response.authResponse) {
						startThaAppNaow() ;
					} else {
						alert('Really? Just login and authorize us already so we can have some fun.') ;
						window.fbAsyncInit();
					}
				},{scope:'friends_status'});

			}
			else{
				$(this).fadeOut();

				startThaAppNaow();
			}

		});

	}) ;

	(function(d){
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));

})