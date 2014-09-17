var responseArray = [];
// var state = '';

// var updateLocalStorage = function(){

// 	var responseListString = JSON.stringify(responseArray);
// 	localStorage.setItem('responseList', responseListString);

// };

//update response function
var updateResponse = function(){

	

	$('#showResponse').empty();



	$(responseArray).each(function(i){

		console.log('response' + i + ':' + this);

		var newResponse = $('<div/>');

		newResponse.attr("id", i).addClass("response").html('<p>' + this + '</p>');
		
		$('#showResponse').append(newResponse);

	// var responseListString = localStorage.getItem('responseList');
	// if(responseListString){
	// 	responseArray = JSON.parse(responseListString);
	// };

	});




};

//save response function
var saveResponse = function(){
	//define newResponse
	var newResponse = $('.newResponse').val();
	//push newResponse to responseArray
	responseArray.push(newResponse);
	//clear input
	$('.newResponse').val('');

	updateResponse();

	// updateLocalStorage();

	console.log(responseArray);

};

//set location function
// var setLocation = function(){

// 	state = $('.currentState').val();

// };

//init function
var init = function(){

	console.log('Respond to me!')
	//event listener for click submit button
	 $('#submit').click(function(e){
	 	e.preventDefault();
	 	saveResponse();
	 	//window.location.href = "html/thankyou.html";

	 });
};

//document ready function

$( document ).ready(function(){

	init();

});