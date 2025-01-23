const process = require('process');

const arguments = process.argv.slice(2);

const generatePassword = (length = 8, options = {}) => {
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
const flagMessages = () => {
    console.log("Please review the following commands to ensure proper use: ");
    console.log("node index.js generate <flags>");
    console.log("");
    console.log("--help         : Displays help message with instructions on how to run this program.");
    console.log("--length       : Sets the length of your password. If length is not specified, passwords default to 8 characters.");
    console.log("--number       : Adds random numbers to the password.");
    console.log("--uppercase    : Adds random uppercase letters to the password.");
    console.log("--symbol       : Adds random symbols (special characters) to the password.");
};

let options = {
    uppercaseLetters: false,
    numbers: false,
    specialCharacters: false
};

arguments.forEach((arg, index) => {
    if (arg === "--help") {
        flagMessages();
        process.exit(0);
    } else if (arg === "--length" && arguments[index + 1]) {
        const value = parseInt(arguments[index + 1], 10);
        if (isNaN(value) || value < 0) {
            console.log("Invalid length entered. Will use default password length of 8 characters.");
        } else {
            passwordLength = value;
        }
    } else if (arg === "--uppercase") {
        options.uppercaseLetters = true;
    } else if (arg === "--number") {
        options.numbers = true;
    } else if (arg === "--symbols") {
        options.specialCharacters = true;
    }
});

const password = generatePassword(passwordLength, options);
console.log(`Your Generated Password is: ${password}`);