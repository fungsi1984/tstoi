// deno-lint-ignore-file prefer-const
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null {
	let dummyHead = new ListNode(0);
	let current = dummyHead;
	let carry = 0;

	while (l1 !== null || l2 !== null) {
		let x = (l1 !== null) ? l1.val : 0;
		let y = (l2 !== null) ? l2.val : 0;
		let sum = carry + x + y;
		carry = Math.floor(sum / 10);
		current.next = new ListNode(sum % 10);
		current = current.next;

		if (l1 !== null) l1 = l1.next;
		if (l2 !== null) l2 = l2.next;
	}

	if (carry > 0) {
		current.next = new ListNode(carry);
	}

	return dummyHead.next;
}

// Function to convert an array to a linked list
function vectorToListNode(arr: number[]): ListNode | null {
	if (arr.length === 0) return null;
	let head = new ListNode(arr[0]);
	let current = head;
	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}
	return head;
}

// Function to print the linked list
function printList(node: ListNode | null): void {
	let result = [];
	while (node !== null) {
		result.push(node.val);
		node = node.next;
	}
	console.log(result.join(" "));
}

// Example usage:
let l1 = vectorToListNode([2, 4, 3]);
let l2 = vectorToListNode([5, 6, 4]);

let result = addTwoNumbers(l1, l2);

printList(result); // Output should be: 7 0 8
