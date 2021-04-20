function display(result) {
  console.log(result);
}
function sum(num1, num2, myFunction) {
  var result = num1 + num2;
  if (myFunction != null) {
    myFunction(result);
  }
}
sum(1, 2, display);
