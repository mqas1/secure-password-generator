// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// How many character would you like your password to contain?

// Password length must be at least 8 characters.
// Password length must be less than 129 characters.
// Click OK to confirm including special characters. (yes or no/true or false)
// Click OK to confirm including numberic characters.
// Click OK to condirm including lowercase characters.
// Click OK to confirm including uppercase characters.





// Assignment Code
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];


var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var userLengthChoice = "";
var userInput = "";
var passwordArray = [];
var generatePassword = "";




function captureUserLengthChoice() {
  userLengthChoice = window.prompt("How many characters would you like your password to contain?");
  if (userLengthChoice < 8) {
    window.alert("Password length must be at least 8 characters.");
  } else if (userLengthChoice > 128) {
    window.alert("Password length must be less than 129 characters.");
  } else {
    captureUserLengthChoice();
  }
  return;
}

userInput = function captureUserInput() {
  var userSpecialCharacters = window.confirm("Click OK to confirm including special characters.");
    if (specialCharacters.includes(userSpecialCharacters)) {
      passwordArray.push(specialCharacters);
    }
  var userNumericCharacters = window.confirm("Click OK to confirm including numberic characters.");
    if (numericCharacters.includes(userNumericCharacters)) {
      passwordArray.push(numericCharacters);
    }
  var userLowerCasedCharacters = window.confirm("Click OK to confirm including lowercase characters.");
    if (lowerCasedCharacters.includes(userLowerCasedCharacters)) {
      passwordArray.push(lowerCasedCharacters);
    }
  var userUpperCasedCharacters = window.confirm("Click OK to confirm including uppercase characters.");
    if (upperCasedCharacters.includes(userUpperCasedCharacters)) {
      passwordArray.push(upperCasedCharacters);
    }
  captureUserInput();
  return;
}
function captureUserSpecialCharactersInput() {
  var userSpecialCharacters = window.confirm("Click OK to confirm including special characters.");
    // if (specialCharacters.includes(userSpecialCharacters) == true) {
    if (specialCharacters == true) {  
    passwordArray.push(specialCharacters);
    } else { (specialCharacters == false)
      !passwordArray.push(specialCharacters);
    }
      captureUserSpecialCharactersInput();
      return;
}
function captureUserNumericCharactersInput() {
  var userNumericCharacters = window.confirm("Click OK to confirm including numeric characters.");
    if (numericCharacters.includes(userNumericCharacters) === true) {
      passwordArray.push(numericCharacters);
    }
      captureUserNumericCharactersInput();
}
function generatePassword() {
var random = Math.floor(Math.random() * userArray.length);
generatePassword = userArray[random];
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  captureUserLengthChoice();
  captureUserSpecialCharactersInput();
  captureUserNumericCharactersInput();
  captureUserInput();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
