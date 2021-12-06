(function(window) {
	var speakWord = "Good Bye";
	var ByeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.ByeSpeaker = ByeSpeaker;

})(window);