var inputLoginEmail = document.getElementById('inputEmail');
var inputLoginPassword = document.getElementById('inputPassword');
var btnLog = document.getElementById('btnLog');
var aleralertMessaget = document.getElementById('alertMessage');

var containerDataSignIn = [];

if (localStorage.getItem('dataSignUp') != null) {
  containerDataSignIn = JSON.parse(localStorage.getItem('dataSignUp'));
} else {
  containerDataSignIn = [];
}

function signIn() {
  if (checkInputEmpty() == true) {
    getAlertMessage('All input is required', 'red');
  } else {
    if (checkEmailAndPass() == true) {
      window.location.href = '../logIn.html';
    } else {
      //false
      getAlertMessage('email or password not correct', 'red');
    }
  }
}

btnLog.addEventListener('click', signIn);

function checkInputEmpty() {
  if (inputLoginEmail.value == '' || inputLoginPassword.value == '') {
    // empty
    return true;
  } else {
    // not empty
    return false;
  }
}

function getAlertMessage(text, style) {
  alertMessage.classList.replace('d-none', 'd-block');
  alertMessage.style.color = style;
  alertMessage.innerHTML = text;
}

function checkEmailAndPass() {
  for (var i = 0; i < containerDataSignIn.length; i++) {
    if (
      containerDataSignIn[i].email == inputLoginEmail.value &&
      containerDataSignIn[i].pass == inputLoginPassword.value
    ) {
      localStorage.setItem('userName', containerDataSignIn[i].name);
      // exist
      return true;
    }
  }
}
