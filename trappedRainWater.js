function trapWater(elevationMap) {
    let n = elevationMap.length;
    let leftMax = Array(n).fill(0);
    let rightMax = Array(n).fill(0);
    let waterTrapped = 0;

    // Populate leftMax with the maximum elevation to the left of each index
    leftMax[0] = elevationMap[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i-1], elevationMap[i]);
    }

    // Populate rightMax with the maximum elevation to the right of each index
    rightMax[n-1] = elevationMap[n-1];
    for (let i = n-2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], elevationMap[i]);
    }

    // Compute the amount of water trapped at each index
    for (let i = 0; i < n; i++) {
        waterTrapped += Math.min(leftMax[i], rightMax[i]) - elevationMap[i];
    }
    
    return waterTrapped;
}


console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1]));