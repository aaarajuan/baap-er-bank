/* step 1: add click event handler with the submit button */
document.getElementById('btn-submit').addEventListener('click', function(){
    /* 
    step 2: get email address inside the input field
    always remember to use .value to get text from an input field 
    */
    const emailFiels = document.getElementById('user-email');
    const email = emailFiels.value;

    /* 
    step 3: get password
    3.a: set id on the html element
    3.b: get the element
    3.c: get the value from the element 
    */
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    /* 
    DANGER: don not verify email passwrod on client side
    step 4: verify email and password 
    */
    if (email === 'ongkur@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('password is incorrect');
    }
})
