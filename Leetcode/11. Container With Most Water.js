/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	var max = 0;
	for(var i = 0; i<height.length; i++){
		for(var j = i+1; j<height.length; j++){
			var max_height = Math.min(height[i], height[j]);
			max = Math.max(max, (j-i)*max_height);
		}
	}
	return max;    
};

maxArea([1,8,6,2,5,4,8,3,7])