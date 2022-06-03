function start() {
	alert("This is thxgen. It was based on GitHub/Anti-Apple4life's tymaker.");
	var one = prompt("Who are you writing to?");
  var two = prompt("What gift did you get from " + one + "? e.g.: 'shirt'");
  var thr = prompt("What kind of party did " + one + " go to? (Do not include connectors, just the noun) e.g.: 'birthday'");
  var fou = prompt("What is your name?");
  var fiv = prompt("What is this person to you? (Friend, parent, etc...) Please do not include connectors.");
  var six = prompt("How would you describe this " + fiv + "? Please include a/an. e.g.: 'an unbelievable'");
  var seve = prompt("What do you like doing with " + one + "? e.g.: playing video games");
  alert("Here is your letter so far. Press OK.");
  alert("Dear " + one + ", thank you so much for getting me my " + two + "! Thank you for coming to my " + thr + ". I enjoy " + seve + " with you. You are " + six + " " + fiv + "! From, " + fou);
  var conOne = prompt("If you like your letter so far, type Y. If not, type N. To exit, type E. Case-sensitive.");
  if (conOne == "N") {
  	alert("Starting over. Press OK.");
    start();
  }
  if (conOne == "E") {
  	function exitStarter() {
    	alert("Exiting. Press OK.");
    }
  }
  if (conOne == "Y") {
  alert("Thank you!");
  	document.getElementById("letter").innerHTML = "Dear " + one + ", thank you so much for getting me a " + two + "! Thank you for coming to my " + thr + ". I enjoy " + seve + " with you. You are " + six + " " + fiv + "! From, " + fou;
  }
}
