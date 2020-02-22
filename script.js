

// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Elements
var password = document.getElementById ("password");
var btn = document.getElementById ("generate");
var lowerElement = document.getElementsByName ("lowerCase");
var upperElement = document.getElementsByName ("upperCase");
var number = document.getElementsByName ("numeric");
var specialElement = document.getElementsByName ("special");
var lenghtElement = document.getElementsByName("length"); 
var randomFunc = {  
    lowerLetter: LowerCase,
    upperLetter: UpperCase,
    number: NumberCase,
    characters: characters
};
// Prompts 
btn.addEventListener("click", () =>{
    var lowerCase = prompt
    ("Do you want Lowercase?");
    var upperCase = prompt
    ("Do you want Uppercase?");
    var numeric = prompt
    ("Do you want Numbers?");
    var special = prompt
    ("Do you want Special Characters?");
    var length = prompt
    ("Choose your password length. At least 8 no more than 128 characters");
});


// Functions, CharCode (http://net-comber.com/charset.html)
function LowerCase (){
return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}
console.log(LowerCase()); 

function UpperCase (){
    return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
    }
console.log(UpperCase()); 

function NumberCase (){
    return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
    }
console.log(NumberCase()); 

function characters (){
    return String.fromCharCode (Math.floor(Math.random() * 15) + 33);
    }
console.log(characters()); 









// Write password to the #password input
 function writePassword(){
   var password = generatePassword();
  var passwordText = document.querySelector("#password");
generateBtn.addEventListener("click", writePassword);
  passwordText.value = password;
 }

console.log(writePassword);


  

// Variables
var lettersUpper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(lettersUpper);
console.log(lettersUpper.length);

var lettersLower= "abcdefghijklmnopqrstuvwxyz";
console.log(lettersLower);
console.log(lettersLower.length);

var  characters = "!@#$%&*";
console.log(characters);
console.log(characters.length);

var number= "0123456789"
console.log(number);
console.log (number.length);

("Do you want Lowercase?");
var upperCase = console.log (upperCase);
("Do you want Uppercase?");
var numeric = console.log (numeric);
("Do you want Numbers?");
var special = console.log (special);
("Do you want Special Characters?");
var length = console.log (length);
("Choose your password length? At least 8 no more than 128 characters");
var L = "would you like lowercase letters?"
var N = "would you like numbers?"
var C = "would you like Special Characters?"
for (var i=0; i= Number; i++) {
  var password = Math.floor(Math.random() * lettersLower.legnth  );
  document.getElementById("btn").addEventListener("click", writePassword());
  
    document.getElementById("btn").alert = "Password";
  }


function makeid(length) {
  var result = '';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(makeid(10));
