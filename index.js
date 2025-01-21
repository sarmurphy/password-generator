const process = require('process');

const arguments = process.argv.slice(2);

// Character options for setting password.
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()-_=+|;:,.<>?";

// Generate help message
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

