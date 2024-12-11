window.alert("HURRY... BEFORE THE STOCK ITS OVER");


//select the form
let signupform = document.querySelector('#signupform');

signupform.addEventListener("submit", handleFormSubmission)

let emailinput = document.querySelector('#emailinput')

function handleFormSubmission(event){
    event.preventDefault();
    console.log(emailinput.value)
    if(emailinput.value == ''){
        alert("email is required")
    }
    console.log("form submitted")
}