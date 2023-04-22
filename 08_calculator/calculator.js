const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(...arr) {
	return arr.length ? arr.reduce((acc, curr) => acc * curr) : 0;
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	// If the number is less than 0, reject it.
  if (num < 0) {
    return -1;
  } 
  // If the number is 0, its factorial is 1.
  else if (num === 0) {
    return 1;
  }
  // Otherwise, call the recursive procedure again
  else {
    return num * factorial(num - 1);
  }
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
