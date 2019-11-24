/**
 * https://leetcode.com/problems/daily-temperatures/
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let max = Math.max(T), position = 0, days = [];
    while(position < T.length){
    	var days_found = 0;
    	if(T[position] != max){
	    	for (var i = position+1; i < T.length; i++) {
	    		if(T[position] < T[i]){
		    		days.push(i-position);
		    		days_found++;
		    		break;
	    		}
	    	};
    	}
    	if(!days_found){
    		days.push(0);
    	}
    	position++;
    }
    return days;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));