var inputTask = document.getElementById('inputTask');
var taskDate = document.getElementById('taskDate');
var btnAdd = document.getElementById('btnAdd');

if (localStorage.getItem('tasks') != null) {
  containerTask = JSON.parse(localStorage.getItem('tasks'));
  displayTask();
} else {
  var containerTask = [];
}

function addTask() {
  if (validateDate() && validateTask()) {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
    var task = {
      tittle: inputTask.value,
      date: taskDate.value,
    };
    containerTask.push(task);
    localStorage.setItem('tasks', JSON.stringify(containerTask));
    displayTask();
    clear();
  }
}

function displayTask() {
  var cartona = '';
  for (var i = 0; i < containerTask.length; i++) {
    cartona += `<div class="col-lg-12">
    <div class="form-check d-flex align-items-center px-3">
      <input
        type="checkbox"
        class="form-check-input mx-0"
        name=""
        id="${containerTask[i].tittle}"
      />
      <label class="form-check-label h3 m-3 p-0" for="${containerTask[i].tittle}">${containerTask[i].tittle}</label>
      <div class="d-flex ms-auto align-items-center gap-2">
        <i
          class="fa-solid fa-trash-can text-danger-emphasis"
          onclick="deleteTask(${i})"
        ></i>
        <div class="bg-white border border-warning rounded p-2">
          <i class="fa-solid fa-hourglass-half text-warning"> </i>
          <span>${containerTask[i].date}</span>
        </div>
      </div>
    </div>
  </div>
 
    `;
  }

  document.getElementById('taskContent').innerHTML = cartona;
}

function deleteTask(index) {
  containerTask.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(containerTask));
  displayTask();
}

function clear() {
  inputTask.value = '';
}

function validateDate() {
  var currentDate = new Date().toJSON().slice(0, 10); //2024-02-20
  if (taskDate.value < currentDate) {
    Swal.fire('Enter Valid Date');
    return false;
  } else {
    return true;
  }
}

function validateTask() {
  var regex = /.+/; // ay 7aga
  if (regex.test(inputTask.value)) {
    return true;
  } else {
    Swal.fire('Enter Task');
    return false;
  }
}
