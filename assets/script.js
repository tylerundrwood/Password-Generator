// Assignment code here
function randomListCharacter(list) {
  return list[randomInteger(list.length)];
}
 
function randomInteger(min, max) {
    if (!max) {
    max = min;
    min = 0;
  } 
  let character = Math.random()
  return Math.floor(min*(1 - character) + character * max);
}

function generatePassword() {
let input = window.prompt( "Choose a password using letters, numbers and symbols, between 8 - 128 characters.");
let passwordLength = parseInt(input);

if (isNaN(passwordLength)) { // will only allow a password to be entered, without having a warning message.
  window.alert("Please enter a password");
  return writePassword();
}

if (passwordLength < 8) { // password is too short
  window.alert("Password is too short. Please enter a password between 8 - 128 characters.");
  return writePassword();
} else if (passwordLength > 128) { // password is too long
  window.alert("Password is too long. Please enter a password between 8 - 128 characters.");
  return writePassword();
}

let numbers = window.confirm("Would you like to use numbers in your password?");// number yes/no
let alpha = window.confirm("Would you like to use upper and lower case letters in your password?");// aplha yes/no
let symbol = window.confirm("would you like to use special characters or symbols in your password");// symbol yes/no

let alphaList= ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'e', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'x', 'X', 'y', 'Y', 'z', 'Z'];// of letters that could be used in the password
let numberList = [0,1,2,3,4,5,6,7,8,9];// list of numbers that could be used in the password
let symbolList = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '|', '}', '{', '[',']', '?', '>', '<', '/', '-', '='];// list of symbols that could be used in the password

let  userChoices = []; // the array the user creates when selecting their password

if (numbers === true) { // if user selects yes for number in password, add number list to array
  userChoices.push(numberList);
}

if (alpha === true) { // if user selects yes for letters in password, add letter list to array
userChoices.push(alphaList);
}

if (symbol === true) { // if user selects yes for special characters/symbols in password, add symbols list to array
userChoices.push(symbolList);
}

if (userChoices.length === 0) { // if user selects no for all options for the password, redeploy them to the start of choices
window.alert("You must select at least one of the options")
return writePassword();
}

let generatePassword = ''; // empty array where the randomly created password will go

for (let x = 0; x < passwordLength; x++) {
  let randomList = randomListCharacter(userChoices);
  let randomCharacter = randomListCharacter(randomList);
  generatePassword += randomCharacter;
}

return generatePassword; // provides a randomly created password for the user
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);