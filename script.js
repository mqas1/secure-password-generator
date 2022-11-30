// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declares the arrays from which the user chooses their password characters.
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Declares variables that will be used in the functions below.
var passwordLength = "";
var randomPassword = "";
var userSpecialCharacters = "";
var userNumericCharacters = "";
var userLowerCasedCharacters = "";
var userUpperCasedCharacters = "";
var passwordCharset = [];

// The function that generates the password containing conditions and other functions
function generatePassword() {
  // The condition in which the user selects the password length and the parameters delimiting valid entries.
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8) {
    window.alert("Password length must be at least 8 characters. Please try again.");
    passwordLength = "";
  } else if (passwordLength > 128) {
    window.alert("Password length must be less than 129 characters. Please try again.");
    passwordLength = "";
  } else {
    captureUserInput();
  }

// The series of functions that prompt the user to select their password characters.
  function captureUserSpecialCharactersInput() {
    userSpecialCharacters = window.confirm("Click OK to confirm including special characters.");
      if (userSpecialCharacters) {  
        passwordCharset = passwordCharset.concat(specialCharacters);
      } else if (!userSpecialCharacters) {
        return;
      }
  }

  function captureUserNumericCharactersInput() {
    userNumericCharacters = window.confirm("Click OK to confirm including numeric characters.");
      if (userNumericCharacters) {
        passwordCharset = passwordCharset.concat(numericCharacters);
      } else if (!userNumericCharacters) {
        return;
      } 
  }

  function captureUserLowerCasedCharactersInput() {
    userLowerCasedCharacters = window.confirm("Click OK to confirm including lowercase characters.");
    if (userLowerCasedCharacters) {
      passwordCharset = passwordCharset.concat(lowerCasedCharacters);
    } else if (!userLowerCasedCharacters) {
      return;
    }
  }

  function captureUserUpperCasedCharactersInput() {
    userUpperCasedCharacters = window.confirm("Click OK to confirm including uppercase characters.");
    if (userUpperCasedCharacters) {
      passwordCharset = passwordCharset.concat(upperCasedCharacters);
    } else if (!userUpperCasedCharacters) {
      return;
    }
  }

  // The function calling the above functions and validating the array in the console.
  function captureUserInput() {
    captureUserSpecialCharactersInput();
    captureUserNumericCharactersInput();
    captureUserLowerCasedCharactersInput();
    captureUserUpperCasedCharactersInput();
    if (!userSpecialCharacters && !userNumericCharacters && !userLowerCasedCharacters && !userUpperCasedCharacters) {
      window.alert ("You must select at least one option.");
      captureUserInput();
    }
    console.log(passwordCharset);
  }

  // For loop that generates the password and validates the password in the console.
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * passwordCharset.length);
    randomPassword += passwordCharset[random];
  }
  console.log(randomPassword);
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  passwordCharset = [];
  randomPassword = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
