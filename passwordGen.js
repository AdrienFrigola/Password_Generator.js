function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+"; 

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers  ? numbersChars    : "";
    allowedChars += includeSymbols ? symbolChars: "";

    if(length <= 0) {
        return "password length must be at least 1";
    }

    if(allowedChars.length === 0){
        return "at least one character type must be selected";
    }

    
    for(let i = 0; i < length; i++){
        password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }
    
    return password;
}


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