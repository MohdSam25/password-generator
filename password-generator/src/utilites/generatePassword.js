
const generatePassword = ({ includeNumbers, includeAlphabets, includeSpecialChars }) => {
    const numbers = '0123456789';
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let characters = '';
    
    if (includeNumbers) characters += numbers;
    if (includeAlphabets) characters += alphabets;
    if (includeSpecialChars) characters += specialChars;
    
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return password;
  };
  
  export default generatePassword;
  