export const formInputValidator = (name, email, password,isSignIn) => {
    let message = [null,null,null];
    const nameRegex = /^[a-zA-Z][a-zA-Z0-9_ ]{2,15}$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
if(!isSignIn && !nameRegex.test(name)) {
    message[0] = ("Enter a valid Name");
}

if(!emailRegex.test(email)){
  message[1] = ("Invalid Email");   
}
if(!passwordRegex.test(password)){
    message[2] = ("Password is weak, try again");
} 

return message;

}
