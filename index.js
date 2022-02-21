/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let res= new Array(nums.length).fill(0);
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            res[i] += Math.abs(nums[i]-nums[j]);
        }
    }
    return res
};

console.log('1', getSumAbsoluteDifferences([1,4,6,8,10]))