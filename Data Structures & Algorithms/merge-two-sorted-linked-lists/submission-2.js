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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dump = new ListNode();
        let res = dump;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                dump.next = list1;
                dump = dump.next;
                list1 = list1.next;
            } else {
                dump.next = list2;
                dump = dump.next;
                list2 = list2.next;
            }
        }

        dump.next = list1 || list2;

        return res.next;
    }
}
