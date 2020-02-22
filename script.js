
// Dom elements
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var upperCase = ("A, B, C, D, E, F, G, H, I ,J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, X, Z");


// // // Event button
generateBtn.addEventListener("click", function(event) {
    var length = prompt
    ("Choose your password length. At least 8  no more than 128 characters");
    var lowerCase = confirm
    ("Do you want Lowercase?");
    var upperCase = confirm
    ("Do you want Uppercase?");
    var numeric = confirm
    ("Do you want Numbers?");
    var special = confirm
    ("Do you want Special Characters?");
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
function Special (){
    return String.fromCharCode (Math.floor(Math.random() * 15) + 33);
    }
console.log(Special());

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Variables
var letters = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
      ,"r","s","t","u","v","w","x","y","z");

var  characters = ("!", "@", "#", "$", "%", "&", "*");
// random number




  
  

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










