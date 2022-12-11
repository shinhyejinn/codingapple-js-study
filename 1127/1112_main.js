function add(num1, num2){
  return num1 + num2;
}
// const a = 10
// const b = 2

// console.log(add(a, b));

function divide(num1, num2){
  return num1 / num2;
}

function surprise(jjy){
  const result = jjy(10,2);
  console.log(result);
}
surprise(divide);

// console.log(add);


