var inputName = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');

var btnSignUp = document.getElementById('btnSignUp');

// var alertAllInputIsRequired = document.getElementById(
//   'alertAllInputIsRequired'
// );
// var alertSuccess = document.getElementById('success');
// var alertEmailExists = document.getElementById('emailExists');

var alertMessage = document.getElementById('alertMessage');

var containerDataSignUp = [];

if (localStorage.getItem('dataSignUp') != null) {
  containerDataSignUp = JSON.parse(localStorage.getItem('dataSignUp'));
} else {
  containerDataSignUp = [];
}

function signUp() {
  if (
    validateName() == true &&
    validateEmail() == true &&
    validatePassword() == true
  ) {
    var data = {
      name: inputName.value,
      email: inputEmail.value,
      pass: inputPassword.value,
    };

    if (checkInputEmpty() == true) {
      getAlertMessage('All input is required', 'red');
    } else {
      if (checkEmailExist() == true) {
        getAlertMessage('Email already exists', 'red');
      } else {
        containerDataSignUp.push(data);
        localStorage.setItem('dataSignUp', JSON.stringify(containerDataSignUp));
        console.log(containerDataSignUp);
        getAlertMessage('success', 'green');
        clearInput();
      }
    }
  } else {
    getAlertMessage('All input is required true', 'red');
  }
}

btnSignUp.addEventListener('click', signUp);

function clearInput() {
  inputName.value = '';
  inputEmail.value = '';
  inputPassword.value = '';
}

function getAlertMessage(text, style) {
  alertMessage.classList.replace('d-none', 'd-block');
  alertMessage.style.color = style;
  alertMessage.innerHTML = text;
}

function checkInputEmpty() {
  if (inputEmail.value == '' || inputName.value == '' || inputPassword == '') {
    return true;
  } else {
    return false;
  }
}

function checkEmailExist() {
  for (let i = 0; i < containerDataSignUp.length; i++) {
    if (containerDataSignUp[i].email == inputEmail.value) {
      return true;
    }
  }
}

function validateName() {
  var messageName = document.getElementById('messageName');
  var regexName = /^[a-zA-ZÀ-ÿ-']+(\s[a-zA-ZÀ-ÿ-']+)*$/;
  var text = inputName.value;
  console.log(regexName.test(text));
  if (regexName.test(text)) {
    // valid

    inputName.classList.replace('is-invalid', 'is-valid');
    messageName.classList.add('d-none');
    return true;
  } else {
    // not Valid

    inputName.classList.replace('is-valid', 'is-invalid');
    messageName.classList.remove('d-none');
    return false;
  }
}
function validateEmail() {
  var messageEmail = document.getElementById('messageEmail');
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var text = inputEmail.value;
  console.log(regexEmail.test(text));
  if (regexEmail.test(text)) {
    // valid

    inputEmail.classList.replace('is-invalid', 'is-valid');
    messageEmail.classList.add('d-none');
    return true;
  } else {
    // not Valid

    inputEmail.classList.replace('is-valid', 'is-invalid');
    messageEmail.classList.remove('d-none');
    return false;
  }
}
function validatePassword() {
  var messagePass = document.getElementById('messagePass');
  var regexpass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var text = inputPassword.value;
  console.log(regexpass.test(text));
  if (regexpass.test(text)) {
    // valid

    inputPassword.classList.replace('is-invalid', 'is-valid');
    messagePass.classList.add('d-none');
    return true;
  } else {
    // not Valid

    inputPassword.classList.replace('is-valid', 'is-invalid');
    messagePass.classList.remove('d-none');
    return false;
  }
}
