const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpw = document.querySelector('#cpw');
const phno = document.querySelector('#phno');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const c = document.querySelector('#c');
const cpp = document.querySelector('#cpp');
const java = document.querySelector('#java');
const python = document.querySelector('#python');
const select = document.querySelector('#role');

form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passVal = password.value.trim();
    const cpassVal = cpw.value.trim();
    const phoneVal = phno.value.trim();
    const maleVal = male.checked;
    const femaleVal = female.checked;
    const cVal = c.checked;
    const cppVal = cpp.checked;
    const javaVal = java.checked;
    const pythonVal = python.checked;
    const selectVal = select.options[select.selectedIndex].value;

    if(usernameVal===''){
        setError(username,'Username cannot be empty!');
    }
    else{
        setSuccess(username);
    }

    if(emailVal===''){
        setError(email,'Email cannot be empty!');
    }
    else if(!validateEmail(emailVal)){
        setError(email,'Invalid Email format!');
    }
    else{
        setSuccess(email);
    }

    if(passVal===''){
        setError(password, 'Password cannot be empty!');
    }
    else if(!validatePw(passVal)) {
        setError(password, "Password must contain at least one number,  one uppercase letter and one special character!");
    } 
    else{
        setSuccess(password)
    }
    if (cpassVal === '') {
        setError(cpw, 'Confirm Password field can\'t be empty!');
    }
    else if(cpassVal !== passVal){
        setError(cpw, "Passwords don't match!");
    }
    else{
        setSuccess(cpw);
    }
    if(!validatePhno(phoneVal)){
        setError(phno,"Please enter a valid phone number");
    }
    else{
        setSuccess(phno);
    }
    
    if(!maleVal && !femaleVal){
        setError(male,"At least one gender should be selected.");
    }
    else{
        setSuccess(male);
    }
    if(!cVal && !cppVal && !javaVal && !pythonVal){
        setError(python, "Atleast one skill should be checked.");
    }
    else{
        setSuccess(python);
    }    

    if(selectVal == ""){
        setError(select,"Select your role");
    }
    else{
        setSuccess(select);
    }
}


function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
}

const validateEmail = (email) => {
    return String (email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

const validatePw = (password) => {
    return String (password)
    .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
}

const validatePhno = (phno) => { 
    return /^\d{10}$/.test(String(phno)); 
}

function validatePhoneNumber(event) {
    var keyCode = event.keyCode || event.which;
    if ((keyCode >= 48 && keyCode <= 57) || // 0-9
        (keyCode >= 96 && keyCode <= 105) || // Numeric keypad
        keyCode === 8 || // Backspace
        keyCode === 9 || // Tab
        keyCode === 37 || // Left arrow
        keyCode === 39 || // Right arrow
        keyCode === 46) { // Delete
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }  