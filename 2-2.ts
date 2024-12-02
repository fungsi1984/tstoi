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
	let dummy = new ListNode();
	let current = dummy;
	let carry = 0;

	while (l1 !== null || l2 !== null || carry !== 0) {
		let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
		carry = Math.floor(sum / 10);
		current.next = new ListNode(sum % 10); // Ensure current.next is always a ListNode
		current = current.next;
		l1 = l1?.next ?? null; // Ensure l1 is ListNode | null
		l2 = l2?.next ?? null; // Ensure l2 is ListNode | null
	}
	return dummy.next;
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
