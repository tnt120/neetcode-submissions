/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let secondPart = slow.next;
        slow.next = null;
        let reversedSecond = this.reverseList(secondPart);

        let firstPart = head;

        while (reversedSecond) {
            let tmp1 = firstPart.next;
            let tmp2 = reversedSecond.next;

            firstPart.next = reversedSecond;
            reversedSecond.next = tmp1;

            firstPart = tmp1;
            reversedSecond = tmp2;
        }
    }

    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            const tempNext = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tempNext;
        }

        return prev;
    }
}
