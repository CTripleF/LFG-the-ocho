async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const discord_url = document.querySelector('input[name="discord-url]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            discord_url
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

//  document.querySelector(CLASS FOR POST FORM).addEventListener('submit', newFormHandler);