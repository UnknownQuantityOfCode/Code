// https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    for (var i = 0; i < s.length/2; i++) {
    	var b = s[i]; s[i] = s[s.length-(1+i)]; s[s.length-(1+i)] = b; 
    };
};

var input1 = ["h","e","l","l","o"];
reverseString(input1);
console.log(input1);
var input2 = ["H","a","n","n","a","h"];
reverseString(input2);
console.log(input2);