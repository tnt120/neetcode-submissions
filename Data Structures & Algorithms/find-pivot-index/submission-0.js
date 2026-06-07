class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const sum = nums.reduce((acc, curr) => acc + curr, 0);
        let leftSum = 0;
        let rightSum = sum - leftSum;

        for (let i = 0; i < nums.length; i++) {
            rightSum -= nums[i];
            
            if (leftSum === rightSum) return i;

            leftSum += nums[i];
        }

        return -1;
    }
}
