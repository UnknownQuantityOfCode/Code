/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var seen = {};
    if(s.length < 2){
    	// IF LESS THAN TWO CHARACTERS ONLY ONE VALID OPTION
    	return s.length;
    }
    // CURRENT LENGTH
    var length = 0;
    for(var i = 0; i < s.length; i++){
    	// FOREACH CHARACTER IN s
    	if(seen[s[i]] == null){
    		// IF IT'S A NEW LETTER WE INCREASE THE CURRENT TRACKED LENGTH
    		length++;
    	}else{
    		// OTHERWISE THE LENGTH IS COUNTED FROM THE LAST TIME THE LETTER WAS SEEN
    		length = i - seen[s[i]];
    	}
    	// SET THE MAX IF IT IS THE LARGEST
    	max = Math.max(max, length);
    	// RECORD THE CHARACTER AS SEEN AND THE POSITION IT HELD
    	seen[s[i]] = i;
    }
    return max;
};