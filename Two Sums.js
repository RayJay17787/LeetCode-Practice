/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = (nums, target) => {
    let n = nums.length
    let i;
    let j;

    for(i = 0; i <= n; i++){
        for(j = i+1; j <= n; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};