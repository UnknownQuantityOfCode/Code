/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	var longest = '';
	// SEARCHING EVERY LETTER
	for(var i = 0; i<s.length; i++){
		// PALINDROMES CAN HAVE A SINGLE OR DOUBLE LETTER CENTER
		// SO WE CHECK STARTING FROM THE SAME LETTER (LEFT == RIGHT) AND FROM TWO CENTER LETTERS (RIGHT = LEFT + 1)
		for(var j = 0; j < 2; j++){
			var left = i;
			var right = i+j;
			// WHILE THE LETTERS ON EITHER SIDE MATCH WE EXPAND OUT
			while(s[left] && s[left] == s[right]){
				left--;
				right++;
			}
			// IF THE HIGHEST INDEX (RIGHT) MINUS THE LOWEST (LEFT) IS GREATER THAN THE LENGTH
			 // OF THE LONGEST WORD, WE HAVE A NEW LONGEST
			if((right - left) > longest.length){
				// LEFT HAS ONE ADDED BECAUSE THE WHILE LOOP TESTS ONE FURTHER THAN THE LAST MATCH, 
				// RIGHT DOES NOT NEED THIS BECAUSE SUBSTRING READS UP TO NOT INCLUDING THAT CHARACTER
				longest = s.substring(left+1, right);
			}
		}
	}
	return longest;
};
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));