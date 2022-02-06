async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post_title"]').value;
    const discord_link = document.querySelector('input[name="discord_link]').value;
    const game_title = document.querySelector('input[name="game_title"]').value;
    const game_console = document.querySelector('input[name="game_console"]').value;
    const game_type = document.querySelector('select[name="game_type"]').value;

    const response = await fetch('/api/posts', {
        method: 'post',
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
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};


document.getElementById('post-submit').addEventListener('submit', newPostHandler);