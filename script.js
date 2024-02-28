function generatePassword() {
    const length = document.getElementById('length').value;
    const quantity = document.getElementById('quantity').value;
    const specialChars = document.getElementById('specialChars').checked;
    const numbers = document.getElementById('numbers').checked;
    const uppercase = document.getElementById('uppercase').checked;
  
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
  
    if (specialChars) charset += '!@#$%&*()+=-*./';
    if (numbers) charset += '0123456789';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    for (let i = 0; i < quantity; i++) {
      let generatedPassword = '';
      for (let j = 0; j < length; j++) {
        generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      password += generatedPassword + '\n';
    }
  
    document.getElementById('passwords').value = password;
  }
  
  function clearInputs() {
    document.getElementById('length').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('specialChars').checked = false;
    document.getElementById('numbers').checked = false;
    document.getElementById('uppercase').checked = false;
    document.getElementById('passwords').value = '';
  }
  