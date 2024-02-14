Password Generator
Description
The generatePassword function is a JavaScript utility that creates a random password based on specified criteria such as length and character types (lowercase letters, uppercase letters, numbers, and symbols).



Usage
To use the generatePassword function, follow these steps:

Call the function generatePassword with the following parameters:

length: Length of the password (minimum 1).
includeLowerCase: Boolean indicating whether to include lowercase letters in the password.
includeUpperCase: Boolean indicating whether to include uppercase letters in the password.
includeNumbers: Boolean indicating whether to include numbers in the password.
includeSymbols: Boolean indicating whether to include symbols in the password.
The function returns a randomly generated password based on the specified criteria.

The generated password will be logged to the console.

Parameters
length: Length of the password to generate.
includeLowerCase: Whether to include lowercase letters in the password.
includeUpperCase: Whether to include uppercase letters in the password.
includeNumbers: Whether to include numbers in the password.
includeSymbols: Whether to include symbols in the password.
Example
javascript
Copy code
const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                includeLowerCase,
                                includeUpperCase, 
                                includeNumbers, 
                                includeSymbols);

console.log(`Generated password: ${password}`);
License
This project is licensed under the MIT License 
