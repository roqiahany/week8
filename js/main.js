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
var searchInput = document.getElementById('searchInput');

var addBTN = document.getElementById('addBTN');
var updateBTN = document.getElementById('updateBTN');
var indexNum = 0;

var producrContainer = [];
if (localStorage.getItem('products') != null) {
  producrContainer = JSON.parse(localStorage.getItem('products'));
  displayData();
}

function addProduct() {
  var product = {
    name: nameProductInput.value,
    price: priceProductInput.value,
    cate: categoryProductInput.value,
    desc: descriptionProductInput.value,
  };
  producrContainer.push(product);
  console.log(producrContainer);
  localStorage.setItem('products', JSON.stringify(producrContainer));
  displayData();
  clearForm();
}

function displayData() {
  var cartona = '';
  for (var i = 0; i < producrContainer.length; i++) {
    cartona += `<tr>
              <td>${producrContainer[i].name}</td>
              <td>${producrContainer[i].price}</td>
              <td>${producrContainer[i].cate}</td>
              <td>${producrContainer[i].desc}</td>
              <td>
                <button class="btn btn-outline-warning btn-sm" onClick='setProduct(${i})'>update</button>
                <button class="btn btn-outline-danger btn-sm "  onclick="deleteProduct(${i})">delete</button>
                </td>
            </tr>`;
  }
  document.getElementById('tableData').innerHTML = cartona;
}

function deleteProduct(elementNum) {
  producrContainer.splice(elementNum, 1);
  localStorage.setItem('products', JSON.stringify(producrContainer));
  displayData();
}

function searchProduct() {
  var term = searchInput.value;
  var cartona = '';
  for (var i = 0; i < producrContainer.length; i++) {
    if (producrContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
      cartona += `<tr>
              <td>${producrContainer[i].name}</td>
              <td>${producrContainer[i].price}</td>
              <td>${producrContainer[i].cate}</td>
              <td>${producrContainer[i].desc}</td>
              <td>
                <button class="btn btn-outline-warning btn-sm" >update</button>
                <button class="btn btn-outline-danger btn-sm "  onclick="deleteProduct(${i})">delete</button>
                </td>
            </tr>`;
    }
    document.getElementById('tableData').innerHTML = cartona;
  }
}

function setProduct(index) {
  indexNum = index;
  var currentProduct = producrContainer[index];
  nameProductInput.value = currentProduct.name;
  priceProductInput.value = currentProduct.price;
  categoryProductInput.value = currentProduct.cate;
  descriptionProductInput.value = currentProduct.desc;

  addBTN.classList.add('d-none');
  updateBTN.classList.remove('d-none');
}

function updateProduct() {
  var product = {
    name: nameProductInput.value,
    price: priceProductInput.value,
    cate: categoryProductInput.value,
    desc: descriptionProductInput.value,
  };
  producrContainer.splice(indexNum, 1, product);
  console.log(producrContainer);
  displayData();
  localStorage.setItem('products', JSON.stringify(producrContainer));

  addBTN.classList.remove('d-none');
  updateBTN.classList.add('d-none');

  clearForm();
}

function clearForm() {
  nameProductInput.value = '';
  priceProductInput.value = '';
  categoryProductInput.value = '';
  descriptionProductInput.value = '';
}
