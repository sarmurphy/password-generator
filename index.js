const process = require('process');

const arguments = process.argv.slice(2);

// Default length for password is 8 characters.
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

// Generate help message to show user how to use the program.
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

// Will show help message when user types --help flag.
arguments.forEach((arg, index) => {
    if (arg === "--help") {
        flagMessages();
        process.exit(0);

    // Changes length of password if user types --length flag.
    } else if (arg === "--length" && arguments[index + 1]) {
        const value = parseInt(arguments[index + 1], 10);
        if (isNaN(value) || value < 0) {
            // Error message if user enters anything other than a whole number for --length flag.
            console.log("Invalid length entered. Will use default password length of 8 characters."); 
        } else {
            passwordLength = value;
        }
    // Adds whichever type of character the user specifies using the flags provided in the help message.    
    } else if (arg === "--uppercase") {
        options.uppercaseLetters = true;
    } else if (arg === "--number") {
        options.numbers = true;
    } else if (arg === "--symbols") {
        options.specialCharacters = true;
    }
});

// Output of generated password.
const password = generatePassword(passwordLength, options);
console.log(`Your Generated Password is: ${password}`);