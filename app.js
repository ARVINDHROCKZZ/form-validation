const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    const usernameVal=username.value.trim()
    const emailVal=email.value.trim()
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim() 
    if(usernameVal==''){
        setError(username,'user')
    }
    else{
        setSuccess(username)
    }
    if(emailVal==''){
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email,'please enter a valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal===''){
        setError(password,'password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'password must atleast be in 8 character')
    }
    else{
        setSuccess(password)
    }
    if(cpassword===''){
        setError(cpassword,confirm password is required)
    }
    else if(cpassword!==passwordVal){
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement =inputGroup.querySelector('.error');
    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}