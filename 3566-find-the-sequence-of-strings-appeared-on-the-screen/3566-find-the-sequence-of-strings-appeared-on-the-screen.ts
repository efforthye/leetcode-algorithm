// 문제: 키보드로 문자열 타이핑 시뮬레이션
// 키1: 'a' 추가, 키2: 마지막 문자를 다음 알파벳으로 변경
// 목표 문자열까지 최소 키 입력으로 나타나는 모든 문자열 반환
function stringSequence(target: string): string[] {
    const result: string[] = [];
    let current = "";
    
    for (let i = 0; i < target.length; i++) {
        // 현재 위치에 'a' 추가
        current += 'a';
        result.push(current);
        
        // 목표 문자가 될 때까지 마지막 문자 변경
        while (current[current.length - 1] !== target[i]) {
            const lastChar = current[current.length - 1];
            const nextChar = String.fromCharCode(lastChar.charCodeAt(0) + 1);
            current = current.slice(0, -1) + nextChar;
            result.push(current);
        }
    }
    
    return result;
}