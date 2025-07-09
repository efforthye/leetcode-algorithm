function isScramble(s1: string, s2: string): boolean {
    const memo = new Map<string, boolean>();
    
    function helper(s1: string, s2: string): boolean {
        if (s1 === s2) return true;
        if (s1.length !== s2.length) return false;
        
        // 메모이제이션 체크
        const key = s1 + "#" + s2;
        if (memo.has(key)) return memo.get(key)!;
        
        // 문자 개수가 다르면 불가능
        if (s1.split('').sort().join('') !== s2.split('').sort().join('')) {
            memo.set(key, false);
            return false;
        }
        
        // 모든 가능한 분할점에서 확인
        for (let i = 1; i < s1.length; i++) {
            // 경우 1: 순서 그대로
            if (helper(s1.substring(0, i), s2.substring(0, i)) && 
                helper(s1.substring(i), s2.substring(i))) {
                memo.set(key, true);
                return true;
            }
            
            // 경우 2: 순서 바뀜
            if (helper(s1.substring(0, i), s2.substring(s2.length - i)) && 
                helper(s1.substring(i), s2.substring(0, s2.length - i))) {
                memo.set(key, true);
                return true;
            }
        }
        
        memo.set(key, false);
        return false;
    }
    
    return helper(s1, s2);
}