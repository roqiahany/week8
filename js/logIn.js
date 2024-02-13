var welcomeMessage = document.getElementById('welcome');

if (localStorage.getItem('userName') != null) {
  welcomeMessage.innerHTML = `welcome ${''}${localStorage.getItem('userName')}`;
}

var btnOut = document
  .getElementById('btnOut')
  .addEventListener('click', function () {
    window.location = './signIn.html';
  });
