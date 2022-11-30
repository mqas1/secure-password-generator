// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var passwordLength = "";
var randomPassword = "";
var userSpecialCharacters = "";
var userNumericCharacters = "";
var userLowerCasedCharacters = "";
var userUpperCasedCharacters = "";
var passwordCharset = [];

function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8) {
    window.alert("Password length must be at least 8 characters.");
  } else if (passwordLength > 128) {
    window.alert("Password length must be less than 129 characters.");
  } else {
    captureUserInput();
  }

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

writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
