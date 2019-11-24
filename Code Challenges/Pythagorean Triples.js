// SoloLearn Pythagorean Triples
// Find a set of integers a, b and c such that a^2 + b^2 = c^2 and a + b + c = n for number n.
function triplet(input){
	var x = 0; var y = 0; var z = 0; 
	while(x <= input){
		while(x+y <= input){
			while(x+y+z <= input){
				if(x!=y && y!=z && x!=z && (x+y+z == input)){
					if((Math.pow(x,2) + Math.pow(y,2)) == Math.pow(z,2)){
						console.log("Found triplet: " + x + ', ' + y + ', ' + z);
						return;
					}
				}
				z++;
			}
			z=0;
			y++;
		}
		y=0;
		x++;
	}
}
triplet(12);

// Minus one loop (since (a + b + c = n) and a and b are known, we can get z by (n - a - b) )
function triplet(input){
	var x = 0; var y = 0; var z = 0; 
	while(x <= input){
		while(x+y <= input){
			z = input - x - y;
			if(x!=y && y!=z && x!=z && (x+y+z == input)){
				if((Math.pow(x,2) + Math.pow(y,2)) == Math.pow(z,2)){
					console.log("Found triplet: " + x + ', ' + y + ', ' + z);
					return;
				}
			}
			y++;
		}
		y=0;
		x++;
	}
}
triplet(12);

// Decrementing for loops with ranges halved (prevent (a + b) being greater than n)
function triplet(input){
	var z = 0;
	for (var x = input/2; x >= 0; x--) {
		for (var y = input/2; y >= 0; y--) {
			z = input - x - y;
			if(x!=y && y!=z && x!=z && (x+y+z == input)){
				if((Math.pow(x,2) + Math.pow(y,2)) == Math.pow(z,2)){
					console.log("Found triplet: " + x + ', ' + y + ', ' + z);
					return;
				}
			}
		};
	};
}
triplet(12);

// Performance Test
var start = performance.now(); triplet(402); console.log(performance.now()-start);

// Explanation for Decrementing Loops
// https://stackoverflow.com/questions/3520688/javascript-loop-performance-why-is-to-decrement-the-iterator-toward-0-faster-t
// https://stackoverflow.com/questions/18640032/javascript-performance-while-vs-for-loops