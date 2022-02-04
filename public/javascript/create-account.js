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


async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
  const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
      username,
      email,
      password
      }),
      headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
      document.location.replace('/profile/');
  } else {
      alert(response.statusText);
  }
  }
};

function returnToLoginHandler(event) {
    event.preventDefault();
    document.location.replace('/login');

};

document.getElementById('create-button').addEventListener('submit', signupFormHandler);
document.getElementById('return-login-button').addEventListener('click', returnToLoginHandler);