$(document).ready(function(){
	getJoke();

  $("#next").click(getJoke);

  $("#submit").click(function() {
  	var jokeText = $("#newJoke").val();
  	if(jokeText) {
  		var myobj = {
	  		joke: jokeText
	  	};
	    jobj = JSON.stringify(myobj);
	    var url = "comment";
			$.ajax({
				url:"joke",
				type: "POST",
				data: jobj,
				contentType: "application/json; charset=utf-8",
				success: function(data,textStatus) {
				}
			});
			$("#newJoke").val("");
  	}
	});
});

function getJoke() {
	$.ajax({
		url: "joke",
		type: "GET",
		contentType: "application/json; charset=utf-8",
		success: function(data,textStatus) {
	    $("#joke").text(data.joke);
		}
	});
}