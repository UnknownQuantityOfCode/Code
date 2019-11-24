/**
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
	var list;
	(ListVal(l1) + ListVal(l2)).toString().split('').forEach(function(l){
		var previous = list;
		list = new ListNode(l);
		list.next = previous;
	});
	return list;
};

function ListVal(list){
	var counter = 1;
	var list_num = list.val;
    while(list.next){
    	list = list.next;
    	list_num += list.val * Math.pow(10,counter);
    	counter++;
    }
    return list_num;
}