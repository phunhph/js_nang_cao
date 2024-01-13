// function không có tham số
function sayHello() {
  console.log("Hello World");
}

// gọi function
sayHello();

// function có tham số
function add(num1, num2) {
  console.log(num1 + num2);
}

// chạy function
add(5, 10);

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// Arguments are the values that are passed into the function

// hàm có giá trị truyền về

function subtract(num1, num2) {
  return num1 - num2;

  console.log("After the return");
}

// Assign the returned value to a variable
const result = subtract(10, 2);

console.log(result, subtract(20, 5));
