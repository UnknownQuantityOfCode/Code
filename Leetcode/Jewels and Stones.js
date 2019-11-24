// https://leetcode.com/problems/jewels-and-stones/
var numJewelsInStones = function(J, S) {
	var jewels = {};
	J.split('').map(function(j){jewels[j] = 1});
	return S.split('').map(function(s){ return (jewels[s]) ? 1:0 }).reduce(function(a,b){ return a+b },0);
};
var J = "aA", S = "aAAbbbb";
console.log(numJewelsInStones(J,S));