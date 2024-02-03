// var friends = ['alaa', 'mai', 'roqa', 'toto'];
// var x = friends.pop();
//var x = friends.shift();
//var x = friends.push();
// var x = friends.unshift();
// var x = friends.length;
//var x = friends.indexOf('alaa');
// var x = friends.lastIndexOf('alaa');
//var x = friends.includes('alaa');
//var x = friends.slice(1,3);
//var x = friends.splice(2,1); // delete
// var x = friends.splice(3,0,'koko');//add
// var x = friends.splice(2, 1, 'koko'); // add,delete

// console.log(friends);
// console.log(x);

var nameProductInput = document.getElementById('productName');
var priceProductInput = document.getElementById('productPrice');
var categoryProductInput = document.getElementById('productCategory');
var descriptionProductInput = document.getElementById('productDescription');
// console.log(nameProductInput);

var producrContainer = [];

function addProduct() {
  var product = {
    name: nameProductInput.value,
    price: priceProductInput.value,
    cate: categoryProductInput.value,
    desc: descriptionProductInput.value,
  };
  producrContainer.push(product);
  console.log(producrContainer);
}

function displayData() {
  var cartona = '';
  for (var i = 0; i < 4; i++) {
    cartona += `<tr>
              <td>oppo</td>
              <td>9000</td>
              <td>mob</td>
              <td>yyyyyy</td>
              <td>
                <button class="btn btn-outline-warning btn-sm">update</button>
                <button class="btn btn-outline-danger btn-sm">delete</button>
              </td>
            </tr>`;
  }
  document.getElementById('tableData').innerHTML = cartona;
}

displayData();
