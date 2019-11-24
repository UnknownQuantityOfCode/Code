/**
 * https://leetcode.com/problems/container-with-most-water/
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var pos = 0;
    height.forEach(function(h1){
    	for (var i = (pos+1); i < height.length; i++) {
    		// let area = (h1 * (i-pos)) - (Math.abs(height[i]-h1) * (i-pos));
    		let area = Math.min(height[i],h1) * (i-pos);
    		max = Math.max(max, area);
    	};
    	pos++;
    })
    return max;
};

var maxAreaOnePass = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right){
    	max = Math.max(max, ( Math.min(height[left],height[right]) * (right-left) ));
    	if(left < right){
    		left++;
    	}else{
    		right--;
    	}
	}
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxAreaOnePass([1,8,6,2,5,4,8,3,7]));