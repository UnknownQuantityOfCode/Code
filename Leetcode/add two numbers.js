// https://leetcode.com/problems/add-two-numbers/
var addTwoNumbers = function(l1, l2) {
    var sum = new ListNode(l1.val + l2.val);
    var l1n = l1.next;
    if(sum.val >= 10){
    	l1n.val += parseInt(sum.val / 10);
    	sum.val = (sum.val % 10);
    }
    var l2n = l2.next;
    if(l1n && l2n){
    	sum.next = addTwoNumbers(l1n, l2n);
	}
    return sum;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function CreateListNode(val){
	var last_node;
	val.toString().split('').forEach(function(i){
		if(last_node){
			var new_node = new ListNode(parseInt(i));
			new_node.next = last_node;
			last_node = new_node;
		}else{
			last_node = new ListNode(parseInt(i));
		}
	});
	return last_node;
}

var addTwoNumbersNew = function(l1, l2) {
    var sum = l1.val + l2.val;
    var node = new ListNode(sum % 10);
    var carry = (sum.val >= 10 ? 1:0);
    var l1n = l1.next;
    var l2n = l2.next;

    if(!l1n && !l2n){
    	if((sum / 10) < 1){
    		return new ListNode(sum);
    	}
    	node.next = new ListNode(1);
    	return node;
    }else if(!l1n || !l2n){
    	node.next = addTwoNumbersNew((l1n || new ListNode(0 + carry)), (l2n || new ListNode(0 + carry)));
    	return node;
    }

    l2n.val += carry;
    node.next = addTwoNumbersNew(l1n, l2n);
    return node;
};

var l1 = CreateListNode(342);
var l2 = CreateListNode(465);

console.log(addTwoNumbers(l1,l2));
console.log(addTwoNumbersNew(l1,l2));