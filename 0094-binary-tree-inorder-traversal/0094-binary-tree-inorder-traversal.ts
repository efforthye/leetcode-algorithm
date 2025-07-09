/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function traverse(node: TreeNode | null) {
        if (node === null) return;
        
        traverse(node.left);   // 왼쪽 먼저
        result.push(node.val); // 현재 노드
        traverse(node.right);  // 오른쪽 마지막
    }
    
    traverse(root);
    return result;
}