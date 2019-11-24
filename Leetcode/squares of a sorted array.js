// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(A) {
	return A.map(function(a){ return a*a}).sort(function(a,b){ return a-b });
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));