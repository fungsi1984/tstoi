function twoSum(nums: number[], target: number): number[] {
    // Declare a map that will store calculations
    const map = new Map<number, { val: number; idx: number }>();

    // Iterate over the nums array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the target and the current number
        const num = target - nums[i];

        // Get the part from the map if it exists
        const part = map.get(num);

        // If the part exists in the map
        if (part) {
            // Return the indices of the previous number calculation and the current index
            return [part.idx, i];
        }

        // If the part does not exist, set the current number and difference with the index
        map.set(nums[i], { val: num, idx: i });
    }

    // If no solution is found, return an empty array (though the problem guarantees a solution)
    return [];
}

// Example usage:
const nums = [2, 7, 1, 16];
const target = 17;
console.log(twoSum(nums, target)); // Output: [0, 1]
