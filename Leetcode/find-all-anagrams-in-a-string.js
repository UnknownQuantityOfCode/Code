/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * Example 1:
 *
 * Input:
 * s: "cbaebabacd" p: "abc"
 *
 * Output:
 * [0, 6]
 *
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 * Example 2:
 *
 * Input:
 * s: "abab" p: "ab"
 *
 * Output:
 * [0, 1, 2]
 *
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	let position = 0, length = p.length, match = p.split(/|/igm).sort().join('');
    while(s.substr(position, length).length == length){
    	let sT = s.substr(position, length);
    	let test = sT.split(/|/igm).sort().join('');
    	if(test == match){
    		console.log("The substring with start index " + position + " is '" + sT + "', which is an anagram of '" + p + "'");
    	}
    	position++;
    }
};

findAnagrams("cbaebabacd", "abc");
findAnagrams("abab", "ab");