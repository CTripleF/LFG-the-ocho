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

document.querySelector('.create-form').addEventListener('submit', signupFormHandler);
document.getElementById('return-login-button').addEventListener('click', returnToLoginHandler);