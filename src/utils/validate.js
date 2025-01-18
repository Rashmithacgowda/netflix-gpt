const checkValidateData = (email, password) => {
    const isEmailValid = /^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})$/i.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
  
    let errors = {};
  
    if (!isEmailValid) {
      errors.email = 'Email not valid';  // Error for email
    }
  
    if (!isPasswordValid) {
      errors.password = 'Password not valid';  // Error for password
    }
  
    return Object.keys(errors).length ? errors : '';  // Return error object or null
  };
  
  export default checkValidateData;
  