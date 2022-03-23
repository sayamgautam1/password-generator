// Assignment Code
let generateBtn = document.querySelector("#generate");

//provide alphabets , number and symbols defined inside an object

const passwordOptions = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
};
// var isUpperCase = true;
// var isLowerCase;
// var isNumber;
// var isSymbol;
// var passwordLength = 0;
var password;
var passwordReturned = "";

// Write password to the #password input
function writePassword() {
  //function to get prefences from the user
  const preferences = getPasswordPreferences();

  // check the preferences via another function
  const prefsAreValid = validatePrefrences(preferences);

  //get length of the password

  const length = passwordLength(prefsAreValid);

  // check length of the character

  const lengthIsValid = validateLength(length);

  // generate password if everything is valid

  if (lengthIsValid === true) {
    password = generatePassword(preferences, length);
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// create a function to enter all the characters of the password

function getPasswordPreferences() {
  //add confim to get input from the user on their password type//
  var isUpperCase = confirm(
    "Do you want yout passwword to have uppercase letters?"
  );
  var isLowerCase = confirm(
    "Do you want yout passwword to have lowercase letters?"
  );
  var isNumber = confirm(
    "Do you want yout passwword to have numberical value?"
  );
  var isSymbol = confirm("Do you want yout passwword to have symbols?");

  return { isUpperCase, isLowerCase, isNumber, isSymbol };
}

// create a function to check if all the characters are selected or not
function validatePrefrences() {
  if (!isUpperCase && !isLowerCase && !isNumber && !isSymbol) {
    alert("please select at least on type of character..");
    return false;
  } else {
    return true;
  }
}

//create a function to get the password length
function passwordLength() {
  if (prefsAreValid) {
    var passwordLengthUser = prompt(
      "How long do you want you password to be [8>length<128] ?"
    );
    return passwordLengthUser;
  } else {
    alert("Please enter at least one character");
    writePassword();
  }
}

//create a function to return if pasword length is valid or not
function validateLength() {
  if (length > 8 && length < 128) {
    return true;
  } else {
    alert("please enter a valid password length [8>length<128], ");
    passwordLength();
  }
}

//add function to geenrate password

function generatePassword() {
  var passwordArray = [];

  if (isUpperCase === true) {
    var upperCaseString = passwordOptions.upperCase.split("");
    passwordArray = passwordArray.concat(upperCaseString);
  }
  if (isLowerCase === true) {
    var lowerCaseString = passwordOptions.lowerCase.split("");
    passwordArray = passwordArray.concat(lowerCaseString);
  }
  if (isNumber === true) {
    var numberString = passwordOptions.number.split("");
    passwordArray = passwordArray.concat(numberString);
  }
  if (isSymbol === true) {
    var symbolString = passwordOptions.symbol.split("");
    passwordArray = passwordArray.concat(symbolString);
  }
  for (i = 0; i < length; i++) {
    passwordReturned +=
      passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
  return passwordReturned;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
