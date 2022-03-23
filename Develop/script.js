// Assignment Code
var generateBtn = document.querySelector("#generate");

//provide alphabets , number and symbols defined inside an object

const passwordOptions = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
};
var isUpperCase;
var isLowerCase;
var isNumber;
var isSymbol;
var passwordLength;

// Write password to the #password input
function writePassword() {
  selectCharacters();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// create a function to enter all the characters of the password

function selectCharacters() {
  //add confim to get input from the user on their password type//
  isUpperCase = confirm(
    "Do you want yout passwword to have uppercase letters?"
  );
  isLowerCase = confirm(
    "Do you want yout passwword to have lowercase letters?"
  );
  isNumber = confirm("Do you want yout passwword to have numberical value?");
  isSymbol = confirm("Do you want yout passwword to have symbols?");
  checkCharacter();
}

// create a function to check if all the characters are selected or not
function checkCharacter() {
  if (!isUpperCase && !isLowerCase && !isNumber && !isSymbol) {
    alert("please select at least on type of character..");
    selectCharacters();
  } else {
    passwordLength = prompt(
      "How long do you want you password to be [8>length<128] ?"
    );
  }

  if (passwordLength > 8 && passwordLength < 128) {
    generatePassword();
  } else {
    alert("please enter a valid password length [8>length<128], ");
    checkCharacter();
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
