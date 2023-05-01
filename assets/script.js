// Assignment code here
function randomCharacter(list) {
  console.log("Button pressed!");
  return list[randomInteger(list.length)];

  function randomInteger(min, max) {
    if (!max) {
    max = min;
    min = 0;
  } 
  let character = Math.random()
  return Math.floor(min*(1 - character) + character * max)
}
function generatePassword() {
let userChoice = prompt("Create a randomized character password")
let length = (8)<(128);
let alpha = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
let numeric = "0123456789";
let symbol = "!@#$%^&*()_+~|}{[]?></-=";
let password = "";


return
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
