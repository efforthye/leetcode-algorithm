/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // nums2의 모든 원소를 nums1에 복사
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    
    // 전체 배열 정렬
    nums1.sort((a, b) => a - b);
}