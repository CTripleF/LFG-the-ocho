async function newFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const userBio = document.querySelector('input[name="userBio"]').value;
    const discord = document.querySelector('input[name="discord"]').value;

    const response = await fetch(`/api/profile`, {
    method: 'POST',
    body: JSON.stringify({
        username,
        email,
        password,
        userBio,
        discord
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
}

document.querySelector('.profile-update-form').addEventListener('submit', newFormHandler);