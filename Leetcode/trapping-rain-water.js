/**
 * https://leetcode.com/problems/trapping-rain-water/
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let amount = 0, position = 0;
	while(position < height.length){
		if(height[position] > 0){
			let end;
			for (var i = (position+1); !end && i < height.length; i++) {
				if(height[i] >= height[position]){
					end = i;
				}
			};
			if(end){
				for (var i = position; i <= end; i++) {
					if((height[position] - height[i]) > 0){
						amount += height[position] - height[i];
					}
				};
				position = end;
			}else{
				position++;
			}
		}else{
			position++;
		}
	}
	return amount;
};

var trapDynamic = function(height){
	let amount = 0, from_left = [], from_right = [];
	from_left[0] = height[0]
	for (var i = 1; i < height.length; i++) {
		from_left[i] = Math.max(height[i], from_left[i-1]);
	};
	from_right[height.length - 1] = height[height.length - 1]
	for (var i = height.length - 2; i >= 0; i--) {
		from_right[i] = Math.max(height[i], from_right[i+1]);
	};
	for (var i = 0; i < from_left.length; i++) {
		amount += Math.min(from_left[i], from_right[i]) - height[i];
	};
	return amount;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1,3]));

console.log(trapDynamic([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trapDynamic([0,1,0,2,1,0,1,3,2,1,2,1,3]));