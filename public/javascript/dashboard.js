// this button is on /profile
function editButtonHandler(event) {
  event.preventDefault();
  document.location.replace('./profile')
};


document.getElementById('edit-button').addEventListener('click', editButtonHandler);