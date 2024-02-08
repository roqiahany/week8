var bookMarkNameInput = document.getElementById('bookMarkName');
var bookMarkURLInput = document.getElementById('bookMarkURL');

var containerBookMark = [];
// var indexNum = 0;

if (localStorage.getItem('bookmarks') != null) {
  containerBookMark = JSON.parse(localStorage.getItem('bookmarks'));
  displayBookMark();
}
function addBookMark() {
  var bookMark = {
    name: bookMarkNameInput.value,
    url: bookMarkURLInput.value,
  };
  containerBookMark.push(bookMark);
  localStorage.setItem('bookmarks', JSON.stringify(containerBookMark));
  displayBookMark();
  clear();
}

function displayBookMark() {
  var cartona = '';
  for (var i = 0; i < containerBookMark.length; i++) {
    cartona += ` <tr>
    <td>${i}</td>
    <td>${containerBookMark[i].name}</td>
    <td>
      <button id='visitBTN' class="btn btn-success" onClick='visit(${i})'>
        <i class="fa-solid fa-eye pe-2" ></i>Visit
      </button>
    </td>
    <td>
      <button class="btn btn-danger" onClick='deleteBookMark(${i})'>
        <i class="fa-solid fa-trash-can pe-2"></i>Delete
      </button>
    </td>
  </tr>`;
  }
  document.getElementById('bodyData').innerHTML = cartona;
}

function visit(i) {
  var url = containerBookMark[i].url;
  if (url !== '') {
    window.open(url, '_blank');
  }
}

function deleteBookMark(i) {
  containerBookMark.splice(containerBookMark[i], 1);
  localStorage.setItem('bookmarks', JSON.stringify(containerBookMark));
  displayBookMark();
}

function clear() {
  bookMarkNameInput.value = '';
  bookMarkURLInput.value = '';
}
