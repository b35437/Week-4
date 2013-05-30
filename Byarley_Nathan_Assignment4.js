//Name: nathan byarley
//Date:
//Term: 1305
//Assignment: Week 4 Project

//my library function
var myLibrary = function() {


//////////////////////////// Start String Functions ///////////////////////////////
//Phone number verification function #1
	var phoneNumberCheck = function(phoneNumber) {
	//local variables
		var start = phoneNumber.indexOf("-");//finds the first tac(dash)
		var end = phoneNumber.lastIndexOf("-"); //finds second tac(dash)
		var firstSet = phoneNumber.substring(0, start);//first 3 numbers
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
	
	
//Email verification function #2
	var emailCheck = function(email) {
	//local variables
		var at = email.indexOf("@");
		var handle = email.substring(0, at);//string from start point to @ 
		var dns = email.substring(at + 1, email.indexOf("."));//also known as IP address
		var ending = email.substring(email.indexOf(".") + 1, email.length);//the .com / .net / .edu
		var verifyEmail = handle + "@" + dns + "." + ending;
		
		//check the format of the entered email with verifyEmail
		if(email === verifyEmail) {
			return true;
		} else {
			return false;
		}
	};
	
//URL Verification function #3
	var urlCheck = function(url) {
		//local variables
		var http = url.substring(0, 5);//first 4 characters(http:)
		var https = url.substring(0, 6);//first 5 characters(https:)
	
		//check to see if the variable matches the string
		if (http === "http:" || https === "https:") {
			return true;
		} else {
			return false;
		}
	};
	
//Title Case function #4
	var wordSplit = function(splitMessage) {
		//local variables
		var newSplitMessage = '';
		splitMessage = splitMessage.toLowerCase().split(' ');//convert intire message to lowercase
		//for loop to find the start of each word
		for(var s = 0; s < splitMessage.length; s++) {
		//each word found, convert first letter to uppercase
			newSplitMessage += splitMessage[s].substring(0, 1).toUpperCase() + splitMessage[s].substring(1, splitMessage[s].length) + ' ';
		}
		return newSplitMessage;
	}
	
// strings seperated by strings function #5
	var stringChange = function(items, sepItems1, sepItems2) {
	//local variables
		var message = "";
		var sepArray = items.split(sepItems1);
		var i = 0;
		//while loop going through each argument
		while(i < sepArray.length) {
			var newChange = sepArray[i];
			i++;
			message += newChange + sepItems2;//combines sctrings
		}
		return message;
	}

//////////////////////////// End String Functions ///////////////////////////////

//////////////////////////// Start Number Functions /////////////////////////////

// number of decimal places function #7
	var numberToDecimal = function(place) {
		var decimalPlace = place.toFixed(2);
		
		return decimalPlace;
	}
	
//fuzzy-match function #8
	var fuzzyMatch = function(intOne, intTwo, percent) {
		//local variables
		var per = (intOne / intTwo) * 100;
		//comparison and return the results
		if((intOne >= intTwo && per >= percent) || (intOne < intTwo && per < percent)) {
			return false;
		} else {
			return true;
		}
	}
	
	
//difference between 2 dates function #9
 var diffDates = function (startDate, endDate) {
 	//local variables
 	var fullDay = 1000 * 60 * 60 * 24; //milliseconds, seconds, minutes, hours
 	var start = new Date(startDate);
 	//var today = diffDates.getDate();
 	var end = new Date(endDate);
 	var comp = Math.ceil((end - start) / fullDay);//subtract end from start and devide by fullday
 	return comp;
 };
	
//send in string return as numeric function #10
 var convertString = function(convert) {
 	var selectedNumber = parseInt(convert);//used parseInt() function for the reason it will distinguish string from integers
 	return selectedNumber;
 };




//////////////////////////// End Number Functions ///////////////////////////////

//////////////////////////// Start Array Functions ///////////////////////////////


//find the smallest value function #11
var smallNumber = function(findMin) {
	//local variables
	var min = findMin[0];
	var len = findMin.length;
	//for loop search array for smallest number once found store in variable and return
	for(var i = 1; i < len; i++) {
		if (findMin[i] < min) {
			min = findMin[i]; 
		}
	}
	return min;
}


//find total value of just numbers in an array function #12
	var sumArray = function(findSum) {
		//local variables
		var sum = 0;
		var p;
		//for loop find the the length 
		for (var i = 0; i < findSum.length; i++) {
			p = parseInt(findSum[i]);//search and find numariac data
			if(!isNaN(p)) sum += p;//isNaN(Not a Number) function
		}
		return sum;
	};
	
	//sort array based on key. function #13
	var sortByKey = function(oldArray, key) {
		return (oldArray.sort(function(a,b) {
			return a[key] - b[key];
		}));
	}
	
	

//////////////////////////// End Array Functions ///////////////////////////////
	
//Return Object
	return {
		"phoneNumberCheck" : phoneNumberCheck,
		"emailCheck"       : emailCheck,
		"urlCheck"		   : urlCheck,
		"wordSplit"        : wordSplit,
		"stringChange"     : stringChange,
		"numberToDecimal"  : numberToDecimal,
		"fuzzyMatch"       : fuzzyMatch,
		"diffDates"        : diffDates,
		"convertString"    : convertString,
		"smallNumber"	   : smallNumber,
		"sumArray"		   : sumArray,
		"sortByKey"		   : sortByKey
	}//end return object
	
}//end library function



//Main Code
var newLib = new myLibrary();

//output
console.log(newLib.phoneNumberCheck("607-372-5008"));
console.log(newLib.emailCheck("nbyarley@fullsail.com"));
console.log(newLib.urlCheck("http://www.perfectworld.com")); // correct URL
console.log(newLib.wordSplit("To day is the day"));
console.log(newLib.stringChange("tic,tac,toe",",","/"));
console.log(newLib.numberToDecimal(13.78965));
console.log(newLib.fuzzyMatch(5,10,20));
console.log(newLib.diffDates("May 29, 2013" , "September 14, 2013") + " Days until my 35th birthday");
console.log(newLib.convertString("12345"));
console.log(newLib.smallNumber([9,5,12,8,2,46,8]));
console.log(newLib.sumArray(['games',2,'t',4,'b',6,'neverwinter',8,'l',10,'e','12']));
console.log(newLib.sortByKey([{a:2},{a:3},{a:1},{a:4}], "a"));




