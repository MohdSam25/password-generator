
export const getStoredPasswords = () => {
    return JSON.parse(localStorage.getItem('passwords')) || [];
  };
  
  export const storePassword = (password) => {
    const passwords = getStoredPasswords();
    passwords.unshift(password);
    localStorage.setItem('passwords', JSON.stringify(passwords.slice(0, 5)));
  };
  