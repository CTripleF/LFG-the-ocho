const res = require("express/lib/response");

async function updateFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const user_bio = document.querySelector('input[name="userBio"]').value;
    const discord = document.querySelector('input[name="discord"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        username,
        email,
        password,
        user_bio
    }),
    headers: {
        'Content-Type': 'application/json'
    }
    });

    if (response.ok) {
    document.location.replace('/homepage');
    } else {
    alert(response.statusText);
    }
};

// this button is on /dashboard
function editButtonHandler(event) {
    event.preventDefault();
    res.render('profile-edit');
};

// this button is on /profile but does not work...
function cancelButtonHandler(event) {
    event.preventDefault();
    document.location.replace('/dashboard');
};


document.getElementById('edit-button').addEventListener('click', editButtonHandler);
document.querySelector('.profile-update-form').addEventListener('submit', updateFormHandler);
document.querySelector('#cancel-button').addEventListener('click', cancelButtonHandler);