const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let result = 0;
	for(i = 0; i <= a.length-1; i++) {
    result += Number(a[i]);
  }
  return result;
};

const multiply = function(a) {
  let result = 1;
	for(i = 0; i <= a.length-1; i++) {
    result *= Number(a[i]);
  }
  return result;
};

const power = function(a, b) {

  return Math.pow(a,b);
};

const factorial = function(a) {
	let fact = 1;
  for(let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
