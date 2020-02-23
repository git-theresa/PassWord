
// 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I" ,"J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
upperCase.sort();
console.log(upperCase.length);
var lowerCase = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];
lowerCase.sort();
var characters =["!", "@", "#", "$", "%", "&", "*"];
lowerCase.sort();
console.log(characters)
var numeric = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"];
numeric.sort();
console.log(numeric.length);


// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById ("password");
var btn = document.getElementById ("generate");
var lowerElement = document.getElementsByName ("lowerCase");
var upperElement = document.getElementsByName ("upperCase");
var numeric = document.getElementsByName ("numeric");
var specialElement = document.getElementsByName ("characters");
var lenghtElement = document.getElementsByName("length"); 
var randomFunc = {  
    lowerLetter: lowerCase,
    upperLetter: upperCase,
    numeric: numeric,
    characters: characters
};

// Functions, CharCode (http://net-comber.com/charset.html)
function lowerCase(){
return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}
console.log(lowerCase);

function UpperCase(){
    return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
    }
console.log(upperCase);

function numeric(){
    return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
    }

function characters(){
    return String.fromCharCode (Math.floor(Math.random() * 15) + 33);
    }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
btn.addEventListener("click", function(event) {
     var length = prompt
    ("Choose your password length. At least 8 no more than 128 characters");
    var lowerCase = prompt
    ("Do you want Lowercase?");
    var upperCase = prompt
    ("Do you want Uppercase?");
    var numeric = prompt
    ("Do you want Numbers?");
    var characters = prompt
    ("Do you want Special Characters?");
   
});



// // // Event button var length = prompt
document.getElementById("generate").addEventListener("click", function randomFunc() {return this.lowerCase + " " + this.characters; 
document.getElementById("generate")
  
    ("Choose your password length. At least 8  no more than 128 characters");
    var lowerCase = confirm
    ("Do you want Lower case?");
    var upperCase = confirm
    ("Do you want Upper case?");
    var numeric = confirm
    ("Do you want Numbers?");
    var special = confirm
    ("Do you want Special Characters?");

});


  console.log(randomFunc);
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











