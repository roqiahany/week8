function calcPrice(price, ads, tax) {
  var sum = price + ads;
  var multi = sum * tax;
  console.log(multi);
  return multi;
}

// decleration
// function getPrice(num1, num2) {
//   var sum = num1 + num2;
//   return sum;
// }

// expression
// var getPrice = function () {
//   var sum = num1 + num2;
//   return sum;
// };

// calcPrice(getPrice(100, 200), 200, 2);

function foo() {
  function bar() {
    return 3;
  }

  return bar();

  function bar() {
    return 8;
  }
}

window.alert(foo());
