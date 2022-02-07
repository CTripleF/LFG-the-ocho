// const res = require("express/lib/response");
const profileUpdateForm = document.getElementById("profile-update-form");
let formData = {};
profileUpdateForm.addEventListener("keyup", event =>{
    const {name, value} = event.target;
    formData = {...formData, [name]: value};
    console.log(formData);
})
async function updateFormHandler(event) {
    event.preventDefault();
    // const username = document.querySelector('input[name="username"]').value;
    // const email = document.querySelector('input[name="email"]').value;
    // const password = document.querySelector('input[name="password"]').value;
    // const user_bio = document.querySelector('textarea[name="userBio"]').value;
    // const discord = document.querySelector('input[name="discord"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers: {
        'Content-Type': 'application/json'
    }
    });

    console.log(response);
    if (response.ok) {
    document.location.replace('/dashboard');
    } else {
    alert(response.statusText);
    }
};

// // this button is on /profile
// function editButtonHandler(event) {
//     event.preventDefault();
//     document.location.replace('./profile')
// };

// this button is on /dashboard
function cancelButtonHandler(event) {
    event.preventDefault();
    document.location.replace('/dashboard');
};


// document.getElementById('edit-button').addEventListener('click', editButtonHandler);
document.getElementById('save-button').addEventListener('click', updateFormHandler);
document.querySelector('#cancel-button').addEventListener('click', cancelButtonHandler);