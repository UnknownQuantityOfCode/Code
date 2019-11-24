// [2019-02-11] Challenge #375 [Easy] Print a new number by adding one to each of its digit
// from https://www.reddit.com/r/dailyprogrammer/comments/aphavc/20190211_challenge_375_easy_print_a_new_number_by/

// Description
// A number is input in computer then a new no should get printed by adding one to each of its digit. If you encounter a 9, insert a 10 (don't carry over, just shift things around).

// For example, 998 becomes 10109.

// Bonus
// This challenge is trivial to do if you map it to a string to iterate over the input, operate, and then cast it back. Instead, try doing it without casting it as a string at any point, keep it numeric (int, float if you need it) only.

// Credit
// This challenge was suggested by user /u/chetvishal, many thanks! If you have a challenge idea please share it in /r/dailyprogrammer_ideas and there's a good chance we'll use it.

// Basic
function solve(input){
	var ret = [];
	input.toString().split(/|/).forEach(function(i){
		ret.push((parseInt(i)+1));
	});
	return ret.join('');
}

// Mapped
function solve(input){
	return input.toString().split(/|/).map(function(a){return parseInt(a)+1}).join('');
}

// No string casting, recursive only
function solve(input){
	if(input<10){return (input+1)};
	var a = (input%10) + 1;
	var b = solve(parseInt(input/10))*10;
	return b+a;
}