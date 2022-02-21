/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  let res = new Array(nums.length).fill(0);
  let dp = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (dp.has(nums[i])) {
      res[i] = dp.get(nums[i]);
    }
    else {
      let sum = 0;
      for (let j = 0; j < nums.length; j++) {
        sum += Math.abs(nums[i] - nums[j])
      }
      res[i] = sum;
      dp.set(nums[i], sum);
    }
  }
  return res
};

console.log('1', getSumAbsoluteDifferences([1, 4, 6, 8, 10]))