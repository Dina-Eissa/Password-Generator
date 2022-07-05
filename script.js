// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var lowercaseCheck;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Function to define the password length
function passwordLengthFunc() {
  passwordLength = prompt(
    "How many Charcters you want the password? (between 8 - 128)"
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Sorry! The password have to be between 8 - 128 characters.");
    passwordLengthFunc();
  }
  return passwordLength;
}

//Function to confirm the user wants lowercase characters or not
function lowercaseConf() {
  lowercaseCheck = confirm("Do you want lowercase characters?");
  return lowercaseCheck;
}

//Function to confirm the user wants uppercase characters or not
function uppercaseConf() {
  uppercaseCheck = confirm("Do you want UPPERCASE characters?");
  return uppercaseCheck;
}

//Function to confirm the user wants numeric characters or not
function numberConfirm() {
  numberCheck = confirm("Do you want Numeric characters?");
  return numberCheck;
}

//Function to confirm the user wants special characters or not
function specialConfirm() {
  specialCheck = confirm("Do you want Special characters?");
  return specialCheck;
}

//Validate that at least one character type should be selected
function validateOneType() {
  lowercaseConf();
  uppercaseConf();
  numberConfirm();
  specialConfirm();
  if (!lowercaseCheck && !uppercaseCheck && !numberCheck && !specialCheck) {
    alert("Sorry! you have to confirm at least one characer type.");
    validateOneType();
  }
}

//Function to generate password that matches the selected criteria
function generatePassword() {
  passwordLengthFunc();
  validateOneType();

  var characters = "";
  var passwordChar = "";

  if (lowercaseCheck && uppercaseCheck && numberCheck && specialCheck) {
    characters = lowerCase + upperCase + numeric + specialChar;
  } else if (lowercaseCheck && uppercaseCheck && numberCheck) {
    characters = lowerCase + upperCase + numeric;
  } else if (lowercaseCheck && numberCheck && specialCheck) {
    characters = lowerCase + numeric + specialChar;
  } else if (lowercaseCheck && uppercaseCheck && specialCheck) {
    characters = lowerCase + upperCase + specialChar;
  } else if (uppercaseCheck && numberCheck && specialCheck) {
    characters = upperCase + numeric + specialChar;
  } else if (lowercaseCheck && uppercaseCheck) {
    characters = lowerCase + upperCase;
  } else if (lowercaseCheck && numberCheck) {
    characters = lowerCase + numeric;
  } else if (lowercaseCheck && specialCheck) {
    characters = lowerCase + specialChar;
  } else if (uppercaseCheck && numberCheck) {
    characters = upperCase + numeric;
  } else if (uppercaseCheck && specialCheck) {
    characters = upperCase + specialChar;
  } else if (numberCheck && specialCheck) {
    characters = numeric + specialChar;
  } else if (uppercaseCheck) {
    characters = upperCase;
  } else if (numberCheck) {
    characters = numeric;
  } else if (specialCheck) {
    characters = specialChar;
  } else if (lowercaseCheck) {
    characters = lowerCase;
  } else {
    alert("Sorry! You didn't select any character type.");
  }

  for (var i = 0; i < passwordLength; i++) {
    passwordChar += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return passwordChar;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
