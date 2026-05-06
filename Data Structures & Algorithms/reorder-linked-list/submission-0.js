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
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let secondPart = slow.next;
        slow.next = null;

        let reversedSecondPart = this.reverseList(secondPart);
        let firstList = head;

        while (reversedSecondPart) {
            let firstNext = firstList.next;
            let secondNext = reversedSecondPart.next;

            firstList.next = reversedSecondPart;
            reversedSecondPart.next = firstNext;

            reversedSecondPart = secondNext;
            firstList = firstNext;
        }
    }

    reverseList(head) {
        let prev = null
        let curr = head;

        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        return prev;
    }
}
