function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let start = 0;
    
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];
        
        // 연료가 부족하면 다음 스테이션부터 시작
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    
    // 전체 연료가 부족하면 불가능
    return totalGas >= totalCost ? start : -1;
}