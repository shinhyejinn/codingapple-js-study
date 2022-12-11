function add(num1, num2){
  return num1+num2;
}

const sum = add(3,4);

console.log(sum);
//스트링 문법 : `${변수명} ${변수명2}` === 변수명 + ' ' + 변수명2 

function surp(operator, a, b){
  const result = operator(a,b);   //=== add(1,4)
  console.log(result);
}

// surp(add(1,4))
surp(add, 1, 4);

