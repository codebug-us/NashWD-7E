$(document).ready(function(){
	console.log(apiKey);
	var airtableEndpoint="https://api.airtable.com/v0/appsOWcgjiR7JbEn6/game_log?api_key="+apiKey;


	//api
	var request =$.ajax({
		url: airtableEndpoint,
		method: "GET",
	});

	request.done(function(response){
		console.log("here is the response:", response);
	});

	request.fail(function( requestObject, textStatus ) {
    	alert( "Request failed: " + textStatus );
  	});

  	var new_record = {
  		"fields": {
  			"username": "i_was_just_written_username", 
  			"score": 43, 
  			"created_at": new Date()
  		}
  	};
  	var new_record_json = JSON.stringify(new_record);

  	var writeRequest = $.ajax({
  		url: airtableEndpoint,
  		method: "POST",
  		contentType: "application/json",
  		data: new_record_json,
  	});

  	writeRequest.done(function(response){
  		console.log("writing response: ", response);
  	});

});