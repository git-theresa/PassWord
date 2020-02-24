// !DOM ELEMENTS
var generateBtn = document.querySelector("#generate");
var lowerValue;
var upperValue;
var numberValue;
var specialValue;
var lengthValue;



function writePassword() {
var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
var pswdLength = prompt("How many characters in your password? Please choose between 8-128");
var passwordGen = [];
    
if (pswdLength >= 8 && pswdLength <= 128) {
    lengthValue = parseInt(pswdLength);

    var upperCase = confirm("Do you want UpperCase letters?");
    var lowerCase = confirm("Do you want lowerCase letters?");
    var numberS = confirm("Do you want Numbers?");
    var special = confirm("Do you want any special characters?");
  }
  else {
    alert("Please choose between 8 and 128");
  }

    if (upperCase===true) {
      upperValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (var i = 0; i < upperValue.length; i++) {
          passwordGen.push(upperValue[i]);
      }
    }

      if (lowerCase===true) {
      lowerValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (var i = 0; i < lowerValue.length; i++) {
          passwordGen.push(lowerValue[i]);
        }
    }
 
    if (numberS===true) {
      numbersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      for (var i = 0; i < numbersValue.length; i++) {
        passwordGen.push(numbersValue[i]);
      }
    }
  
    if (special===true) {
      specialValue = ["!", "@", "#", "$", "%", ":", ";", "-", "?"];
      for (var i = 0; i < specialValue.length; i++) {
        passwordGen.push(specialValue[i]);
      }
    }
   
//  Generate New Password   
 
  var newPassword = ""
  for(var i = 0; i < lengthValue; i++){
    newPassword += passwordGen[Math.floor(Math.random() * passwordGen.length)];
  }
  return newPassword;
}
// addEventListener 
generateBtn.addEventListener("click", () => {
  writePassword;
});
