// https://leetcode.com/problems/fizz-buzz/
var fizzBuzz = function(n) {
	var array = [];
  	for (var i = 1; i <= n; i++) {
  	  	array.push((i%3==0 && i%5==0) ? 'FizzBuzz' : (i%3==0) ? 'Fizz' : (i%5==0) ? 'Buzz' : i);
	};
	return array;
};

console.log(fizzBuzz(15));