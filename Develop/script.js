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
// let passwordReturned = "";

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
      "How long do you want you password to be [8>=length<=128] ?"
    );
  }
  return passwordLengthUser;
}

//function to return if pasword length is valid or not
function validateLength(passlength) {
  if (passlength >= 4 && passlength <= 128) {
    return true;
  } else {
    alert("please enter a valid password length [8>=length<=128], ");
    writePassword();
  }
}

//function to geenrate password

function generatePassword(pref, lengthpassword) {
  let passwordArray = [];
  let passwordReturned = "";
  let upperCaseArray = [];
  let lowerCaseArray = [];
  let numberArray = [];
  let symbolArray = [];
  let trueCount = 0;

  if (pref.isUpperCase === true) {
    trueCount += 1;
    var upperCaseString = passwordOptions.upperCase.split("");
    passwordArray = passwordArray.concat(upperCaseString);
    upperCaseArray = upperCaseArray.concat(upperCaseString);
    for (i = upperCaseArray.length - 1; i < upperCaseArray.length; i++) {
      passwordReturned +=
        upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
    }
  }
  if (pref.isLowerCase === true) {
    trueCount += 1;
    var lowerCaseString = passwordOptions.lowerCase.split("");
    passwordArray = passwordArray.concat(lowerCaseString);
    lowerCaseArray = lowerCaseArray.concat(lowerCaseString);
    for (i = lowerCaseArray.length - 1; i < lowerCaseArray.length; i++) {
      passwordReturned +=
        lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
    }
  }
  if (pref.isNumber === true) {
    trueCount += 1;
    var numberString = passwordOptions.number.split("");
    passwordArray = passwordArray.concat(numberString);
    numberArray = numberArray.concat(numberString);
    for (i = numberArray.length - 1; i < numberArray.length; i++) {
      passwordReturned +=
        numberArray[Math.floor(Math.random() * numberArray.length)];
    }
  }
  if (pref.isSymbol === true) {
    trueCount += 1;
    var symbolString = passwordOptions.symbol.split("");
    passwordArray = passwordArray.concat(symbolString);
    symbolArray = symbolArray.concat(symbolString);
    for (i = symbolArray.length - 1; i < symbolArray.length; i++) {
      passwordReturned +=
        symbolArray[Math.floor(Math.random() * symbolArray.length)];
    }
  }

  for (i = 0; i < lengthpassword - trueCount; i++) {
    passwordReturned +=
      passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }

  let passwordReturnedArray = passwordReturned.split("");

  for (i = passwordReturnedArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    var tempPassword = passwordReturnedArray[i];
    passwordReturnedArray[i] = passwordReturnedArray[j];
    passwordReturnedArray[j] = tempPassword;
  }
  return passwordReturnedArray.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
