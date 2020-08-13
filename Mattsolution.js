// declaring global variables to start
debugger;
var symbols = "!@#$%^&*(){}[]<>?"; //created a variable for possible symbols to include in password
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; //creates a variable to list all letters in lowercase
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //takes all of the lowercase letters from lowerCase var, and converts them to upper case
var numbers = "123456789"; //creates a variable of possible number combinations
var parameters; //going to be used inside of function, will store results depending on what user decides
// // Assignment Code
var generateBtn = document.querySelector("#generate");
// // Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 function generatePassword() {
     var length = parseInt(prompt("How many characters would you like password to be? (choose a number between 8 and 128)")); //1st prompt allows user to input a value for password length, stored in length. this is converted to a number with parseInt
     if(length < 8 || length > 128){ //if length is less than 8 or greater than 128 then...
        alert("You did not choose a value between 8 and 128, please try again.") //an alert message pops up
    }  else {
        var lowerCaseConfirm = confirm("Hit 'OK' for password to include lowercase letters"); //2nd prompt is does user want password include lowercase letters, stored in lowerCase -----could do a variable with all letters then add add a .toUpperCase to the var
        var upperCaseConfirm = confirm("Hit 'OK' for password to include uppercase letters"); //3rd prompt is does user wantpassword include uppercase letters, stored in upperCase
        var numbersConfirm = confirm("Hit 'OK' for password to include numbers"); //4th prompt is does password include numbers
        var symbolsConfirm = confirm("Hit 'OK' for password to include special characters"); //5th prompt is does password in special characters
    }
    //all options picked
    if (lowerCaseConfirm && upperCaseConfirm && numbersConfirm && symbolsConfirm){ //user has selected all options, password will have combo of upper/lower/numbers/symbols
        parameters = lowerCase.concat(upperCase, numbers, symbols)
    }
    //3 options picked by user
    else if (upperCaseConfirm && numbersConfirm && symbolsConfirm){ //user has selected 3 options, password will have combo of upper/numbers/symbols
        parameters = upperCase.concat(numbers, symbols)
    }
    else if (lowerCaseConfirm && numbersConfirm && symbolsConfirm){ //user has selected 3 options, password will have combo of lower/numbers/symbols
        parameters = lowerCase.concat(numbers, symbols)
    }
    else if (lowerCaseConfirm && upperCaseConfirm && symbolsConfirm){ //user has selected 3 options, password will have combo of lower/uppers/symbols
        parameters = lowerCase.concat(upperCase, symbols)
    }
    else if (lowerCaseConfirm && upperCaseConfirm && numbersConfirm){ //user has selected 3 options, password will have combo of lower/upper/numbers
        parameters = lowerCase.concat(upperCase, numbers)
    }
    //2 options picked by user
    else if (upperCaseConfirm && lowerCaseConfirm){ //user has selected 2 options, password will have combo of lower/upper
        parameters = upperCase.concat(lowerCase)
    }
    else if (upperCaseConfirm && symbolsConfirm){ //user has selected 2 options, password will have combo of upper/symbols
        parameters = upperCase.concat(symbols)
    }
    else if (upperCaseConfirm && numbersConfirm){ //user has selected 2 options, password will have combo of upper/numbers
        parameters = upperCase.concat(numbers)
    }
    else if (lowerCaseConfirm && symbolsConfirm){ //user has selected 2 options, password will have combo of lower/symbols
        parameters = lowerCase.concat(symbols)
    }
    else if (lowerCaseConfirm && numbersConfirm){ //user has selected 2 options, password will have combo of lower/numbers
        parameters = lowerCase.concat(numbers)
    }
    else if (numbersConfirm && symbolsConfirm){ //user has selected 2 options, password will have combo of numbers/symbols
        parameters = numbers.concat(symbols)
    }
    //1 option
    else if (symbolsConfirm){ //user has selected 1 option, password will have combo of symbols
        parameters = (symbols)
    }
    else if (numbersConfirm){ //user has selected 1 option, password will have combo of numbers
        parameters = (numbers)
    }
    else if (upperCaseConfirm){ //user has selected 1 option, password will have combo of uppers
        parameters = (upperCase)
    }
    else if (lowerCaseConfirm){ //user has selected 1 option, password will have combo of symbols
        parameters = (lowerCase)
    }
    var password = [];
    for (var i = 0; i < length; i++) {
        var userParameters = parameters[Math.floor(Math.random() * parameters.length)];
        password.push(userParameters);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}