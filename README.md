# Semester 3 - Fullstack JS
## QAP 1 - Password Generator
A CLI (command line interface) application that generates a password for the user including uppercase letters, lowercase letters, symbols, and/or numbers. Users can customize the length and the contents of the password with provided flags.

## How to use
Enter CLI, and change the directory to where index.js is located. To run the program with default password characters and length (lowercase letters, 8 characters in length), simply type `node index.js`. The flags provided to the user are as follows:  
 - `--length` allows the user to customize the length of their password.  
           Example: `length 12` will give a password that is 12 characters in length.  
 - `--uppercase` will generate a password that includes uppercase letters.  
 - `--number` will generate a password that includes numbers.  
 - `--symbol` will generate a password that includes symbols.  
 - `--help` will generate a help message that provides the user with all of the above flags to run the program.
