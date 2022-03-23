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
let length = 0;
let password;
let passwordReturned = "";

// Write password to the #password input
function writePassword() {
  //function to get prefences from the user
  const preferences = getPasswordPreferences();

  // check the preferences via another function
  const prefsAreValid = validatePrefrences(preferences);

  //get length of the password

  length = passwordLength(prefsAreValid);

  // check length of the character

  const lengthIsValid = validateLength(length);

  // generate password if everything is valid

  if (lengthIsValid === true) {
    password = generatePassword(preferences, length);
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function to enter all the characters of the password

function getPasswordPreferences() {
  //add confim to get input from the user on their password type//
  let isUpperCase = confirm(
    "Do you want yout password to have uppercase letters?"
  );
  let isLowerCase = confirm(
    "Do you want yout password to have lowercase letters?"
  );
  let isNumber = confirm("Do you want yout password to have numberical value?");
  let isSymbol = confirm("Do you want yout password to have symbols?");

  return { isUpperCase, isLowerCase, isNumber, isSymbol };
}

//function to check if all the characters are selected or not
function validatePrefrences(prefences) {
  if (
    !prefences.isUpperCase &&
    !prefences.isLowerCase &&
    !prefences.isNumber &&
    !prefences.isSymbol
  ) {
    alert("please select at least on type of character..");
    writePassword();
  } else {
    return true;
  }
}

// function to get the password length
function passwordLength(len) {
  if (len) {
    var passwordLengthUser = prompt(
      "How long do you want you password to be [8>length<128] ?"
    );
  }
  return passwordLengthUser;
}

//function to return if pasword length is valid or not
function validateLength(passlength) {
  if (passlength > 8 && passlength < 128) {
    return true;
  } else {
    alert("please enter a valid password length [8>length<128], ");
    writePassword();
  }
}

//function to geenrate password

function generatePassword(pref, lengthpassword) {
  var passwordArray = [];

  if (pref.isUpperCase === true) {
    var upperCaseString = passwordOptions.upperCase.split("");
    passwordArray = passwordArray.concat(upperCaseString);
  }
  if (pref.isLowerCase === true) {
    var lowerCaseString = passwordOptions.lowerCase.split("");
    passwordArray = passwordArray.concat(lowerCaseString);
  }
  if (pref.isNumber === true) {
    var numberString = passwordOptions.number.split("");
    passwordArray = passwordArray.concat(numberString);
  }
  if (pref.isSymbol === true) {
    var symbolString = passwordOptions.symbol.split("");
    passwordArray = passwordArray.concat(symbolString);
  }
  for (i = 0; i < lengthpassword; i++) {
    passwordReturned +=
      passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
  return passwordReturned;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
