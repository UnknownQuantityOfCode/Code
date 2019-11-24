/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	return parseInt(x.toString().split('').reverse().join('')) * ((x < 0) ? -1 : 1);
};
