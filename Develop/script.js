// Assignment Code
var generateBtn = document.querySelector("#generate");

//provide alphabets , number and symbols defined inside an object

const passwordOptions = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
};

// Write password to the #password input
function writePassword() {
  //add confim to get input from the user on their password type//
  const isUpperCase = confirm(
    "Do you want yout passwword to have uppercase letters?"
  );
  const isLowerCase = confirm(
    "Do you want yout passwword to have lowercase letters?"
  );
  const isNumber = confirm(
    "Do you want yout passwword to have numberical value?"
  );
  const isSymbol = confirm("Do you want yout passwword to have symbols?");

  var passwordLength;

  //check if all the fields are selcted
  if (!isUpperCase && !isLowerCase && !isNumber && !isSymbol) {
    alert("please select at least on type of character..");
    return;
  } else {
    passwordLength = prompt(
      "How long do you want you password to be [8>length<128] ?"
    );
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
