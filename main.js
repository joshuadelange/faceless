//Mufasa.
$(document).ready(function(){

	function startThaAppNaow(){

		$('#loader').fadeIn();
		$('#login').fadeOut();

		new Scores('#score') ;

		new Profile('#profile') ;
		
		new Statuses('#statuses') ;

	}

	window.fbAsyncInit = function() {
		FB.init({
			appId      : '393049337449640', // PROD
			// appId      : '486875798018589', // DEV for localhost/Faceless/
			channelUrl : '//joshuadelange.github.com/faceless/channel.html', // Channel File
			status     : true, // check login status
			cookie     : true, // enable cookies to allow the server to access the session
			xfbml      : true  // parse XFBML
		});
	
		FB.getLoginStatus(function(response) {

			if(response.status !== 'connected') {

				$('#login').fadeIn();

			}
			else{

				startThaAppNaow();
			}

		});

	}

	$('#login').click(function(){

		FB.login(function(response) {
			if (response.authResponse) {
				startThaAppNaow() ;
			} else {
				alert('Really? Just login and authorize us already so we can have some fun.') ;
				window.fbAsyncInit();
			}
		},{scope:'friends_status'});

	}) ;

	(function(d){
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));

})