/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null;
    
    // 모든 노드를 배열에 담기
    const nodes: number[] = [];
    
    for (const list of lists) {
        let current = list;
        while (current) {
            nodes.push(current.val);
            current = current.next;
        }
    }
    
    // 정렬
    nodes.sort((a, b) => a - b);
    
    // 새 연결 리스트 만들기
    if (nodes.length === 0) return null;
    
    const head = new ListNode(nodes[0]);
    let current = head;
    
    for (let i = 1; i < nodes.length; i++) {
        current.next = new ListNode(nodes[i]);
        current = current.next;
    }
    
    return head;
}