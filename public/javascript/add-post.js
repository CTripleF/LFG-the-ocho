async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const discord_link = document.querySelector('input[name="discord-link]').value;
    const game_title = document.querySelector('input[name="game_title"]').value;
    const game_console = document.querySelector('input[name="game_console"]').value;
    const game_type = document.querySelector('input[name="game_type"]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            discord_link,
            game_title,
            game_console,
            game_type
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