async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const discord_link = document.querySelector('input[name="discord-link]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            discord_link
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        // confirm this name is homepage!!
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

// Need below info
// document.querySelector(CLASS FOR POST FORM).addEventListener('submit', newFormHandler);