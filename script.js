
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
var length = ("8" <= "128");


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
//  / Write password to the #password input   
var passwordText = document.querySelector("#password"); 
  
passwordText.value = password;

function writePassword() {
    writePassword=randomFunc;
}
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Functions, CharCode (http://net-comber.com/charset.html)

btn.addEventListener("click", function() {
     var length = prompt(
    ("Choose your password length. At least 8 no more than 128 characters"));
    if(length === true) {
        confirm ("Do you want Lower Case Letters?");
    }
    else {
     (prompt("Please try again"));
    }
    var lowerCase = prompt 
    ("Do you want lower case?");
    if (confirm === true) { 
        return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
    } 
    else {
        (confirm ("Do you want Upper Case Letters?"));
    }
    upperCase = prompt
   if (confirm === true) { return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
   }
   else {
       (prompt("Do you want Numbers?"));
   }

   if (confirm(numbers === true)) {
    return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
   }
   else {
       (confirm ("Do you want special characters?"));
   }
   
   if (characters === true) {
    return String.fromCharCode (Math.floor(Math.random() * 15) + 33);
   }
   else {
    return randomFunc();
    }
});


   
   
    
