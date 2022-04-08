const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.length > 0 && re.test(email);
};


const validatePassword = (password: string): boolean => (
  password.length > 0 && /[0-9]/.test(password) && /[a-zA-Z]/.test(password)
);


export {validateEmail, validatePassword};
