var jump = function(nums) {
    let jumps = 0;
    let currEnd = 0;
    let currFarthest = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        currFarthest = Math.max(currFarthest, i + nums[i]);
        console.log(currFarthest, ' farthest')
        console.log(currEnd, ' end', ' ', i, ' i')
        if (i === currEnd) {
            jumps++;
            currEnd = currFarthest;
        } console.log(jumps, ' jumps')
    }
    
    return jumps;
};
console.log(jump([2,3,1,1,4]))