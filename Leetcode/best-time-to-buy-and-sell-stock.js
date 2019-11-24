/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *           Not 7-1 = 6, as selling price needs to be larger than buying price.
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let m = 0, l = 0, r = prices.length-1;
    while(l<r){
    	m = Math.max(m, prices[r]-prices[l]);
    	if((prices[r]-prices[l]) < 0){
    		l++;
    	}else{
    		r--;
    	}
    }
    return m;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));