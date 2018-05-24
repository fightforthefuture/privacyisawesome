function uploadPhoto() {
			$('.fb_button_large').hide();
			$('.waiting').show();	
	var imgURL="http://privacyisawesome.com/cispa-fftf-cover-image.png"; //change with your external photo url
	console.log("got he url");
	FB.api('/photos', 'post', {
	    // message:'description',
	    url:imgURL        
	}, function(response){

	    if (!response || response.error) {
			alert("Sorry, there was a problem. Please download the image and upload it manually.")
			$('.waiting').hide();
	    } else {
			$('.fb-instructions').show();
			$('.waiting').hide();
	        //alert('Post ID: ' + response.id);
	    }

	});
}



 window.fbAsyncInit = function() {
   FB.init({
     appId      : '241202702657740',
     status     : true, 
     cookie     : true,
     xfbml      : true,
     oauth      : true,
   });

 // FB.Event.subscribe('auth.login',
 //      function(response) {
 // 
 // 						console.log("yeah, logged");
 // 
 //          // FB.api('/me', function(response) {
 //          // 		                	
 //          // 		
 //          // 		
 //          // 												var postMSG="Your message";
 //          // 											 var url='https://graph.facebook.com/albumID/photos?access_token='+accessToken+"&message="+postMSG;
 //          // 											 var imgURL="http://farm4.staticflickr.com/3332/3451193407_b7f047f4b4_o.jpg";//change with your external photo url
 //          // 											 var formData = new FormData();
 //          // 											 formData.append("url",imgURL);
 //          // 
 //          // 											  $.ajax({
 //          // 											                    url: url,
 //          // 											                    data: formData,
 //          // 											                    cache: false,
 //          // 											                    contentType: false,
 //          // 											                    processData: false,
 //          // 											                    type: 'POST',
 //          // 
 //          // 											                    success: function(data){
 //          // 											                        alert("POST SUCCESSFUL");
 //          // 											                    }
 //          // 											                });
 //          // 		
 //          // 		
 //          // 		
 //          // 		
 //          // 		
 //          // 		
 //          // 		                });                   
 //      }); 

}; 
 (function(d){
    var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    d.getElementsByTagName('head')[0].appendChild(js);
  }(document));