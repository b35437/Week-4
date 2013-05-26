//Name: nathan byarley
//Date:
//Term: 1305
//Assignment: Week 4 Project

var phoneNumber = "607-372-5008";
var validNumber;

// checking the phone number
var phoneNumberCheck = function (phoneNumber) {
	if (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-") {
		validNumber = true;
	} else {
		validNumber = false;
	}
	return validNumber;
};