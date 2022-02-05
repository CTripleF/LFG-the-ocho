async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(email);
    console.log(password);
    if (email && password) {
    const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
        email,
        password
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
    }
}
// var password = document.getElementById("password-signup")
//     , confirm_password = document.getElementById("password-confirm");

// function validatePassword(){
//     if(password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//     } else {
//     confirm_password.setCustomValidity('');
//     }
// }

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;


// async function signupFormHandler(event) {
//     event.preventDefault();

//     const username = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (username && email && password) {
//     const response = await fetch('/api/users', {
//         method: 'post',
//         body: JSON.stringify({
//         username,
//         email,
//         password
//         }),
//         headers: { 'Content-Type': 'application/json' }
//     }).then((response) => {console.log(response)});

//     if (response.ok) {
//         document.location.replace('/dashboard/');
//     } else {
//         alert(response.statusText);
//     }
//     }
// }

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);