const process = require('process');

const arguments = process.argv.slice(2);

const generatePassword = (length, options) => {
    // Character options for setting password.
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+|;:,.<>?";
    
    let characters = lowercaseLetters; 
    // Password will be set to include only lowercase letters by default.
    if (options.uppercaseLetters) characters += uppercaseLetters;
    if (options.numbers) characters += numbers;
    if (options.specialCharacters) characters += specialCharacters;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
};

// Generate help message.
if (arguments.length === 0) {
    console.log("Please review the following commands to ensure proper use:\n ");
    console.log("node index.js generate <flags>");
    console.log("");
    console.log("--help         : Displays help message with instructions on how to run this program.");
    console.log("--length       : Sets the length of your password. If length is not specified, passwords default to 8 characters.");
    console.log("--number       : Adds random numbers to the password.");
    console.log("--uppercase    : Adds random uppercase letters to the password.");
    console.log("--symbol       : Adds random symbols (special characters) to the password.");
};

// Makes the password 8 characters by default if nothing is entered.
const defaultLength = 8;
let passwordLength = defaultLength

