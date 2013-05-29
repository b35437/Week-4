//Name: nathan byarley
//Date:
//Term: 1305
//Assignment: Week 4 Project

//my library function
var myLibrary = function() {

//Phone number verification
	var phoneNumberCheck = function(phoneNumber) {
	//local variables
		var start = phoneNumber.indexOf("-");//finds the first tac
		var end = phoneNumber.lastIndexOf("-"); //finds second tac
		var firstSet = phoneNumber.substring(0, start);//first 3 number
		var secondSet = phoneNumber.substring(4, end);//second 3 numbers
		var thirdSet = phoneNumber.substring(8, 12);//last 4 numbers
		var numberCheck = firstSet + "-" + secondSet + "-" + + thirdSet;
		
		//compare numbers for verification
		if(phoneNumber === numberCheck) {
			return true;
		} else {
			return false;
		}
	};//end phoneNumberCheck
	
	
//Email verification
	var emailCheck = function(email) {
	//local variables
		var at = email.indexOf("@");
		var handle = email.substring(0, at);
		var dsn = email.substring(at + 1, email.indexOf("."));
		var ending = email.substring(email.indexOf(".") + 1, email.length);
		var verifyEmail = handle + "@" + dsn + "." + ending;
		
		//check the format of email matches verifyEmail
		if(email === verifyEmail) {
			return true;
		} else {
			return false;
		}
	};
	
//URL Verification
	var urlCheck = function(url) {
		//local variables
		var http = url.substring(0, 5);//first 4 characters
		var https = url.substring(0, 6);//first 5 characters
	
		//check to see if the variable matches the string
		if (http === "http:" || https === "https:") {
			return true;
		} else {
			return false;
		}
	
	};
	
//Title Case
	var wordSplit = function(splitMessage) {
		//local variables
		var newSplitMessage = '';
		splitMessage = splitMessage.toLowerCase().split(' ');//convert intire message to lowercase
		//for loop to find each word
		for(var s = 0; s < splitMessage.length; s++) {
			newSplitMessage += splitMessage[s].substring(0, 1).toUpperCase() + splitMessage[s].substring(1, splitMessage[s].length) + ' ';
		}
		return newSplitMessage;
	}
	
// strings seperated by strings
	var stringChange = function(first, second, third) {
	//local variables
		var message = "";
		var sepArray = first.split(second);
		var i = 0;
		//while loop going through each argument
		while(i < sepArray.length) {
			var newChange = sepArray[i];
			i++
			message += newChange + third;
		}
		return message;
	}




//Return Object
	return {
		"phoneNumberCheck" : phoneNumberCheck,
		"emailCheck"       : emailCheck,
		"urlCheck"		   : urlCheck,
		"wordSplit"        : wordSplit,
		"stringChange"     : stringChange
	}//end return object
	
}//end library function



//Main Code
var newLib = new myLibrary();

//output
console.log(newLib.phoneNumberCheck("607-372-5008"));
console.log(newLib.emailCheck("nbyarley@fullsail.com"));
console.log(newLib.urlCheck("http://www.perfectworld.com")); // correct URL
console.log(newLib.urlCheck("www.perfectworld.com"));//incorrect URL
console.log(newLib.wordSplit("To day is the day"));
console.log(newLib.stringChange("tic,tac,toe",",","/"));




