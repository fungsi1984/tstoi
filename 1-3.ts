function twoSum(nums: number[], target: number): number[] {
	// const numToIndex = {};
	const numToIndex: { [key: number]: number } = {};

	// Iterate through the array
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		// Calculate the complement
		const complement = target - num;

		// Check if the complement exists in the object using the 'in' operator
		if (complement in numToIndex) {
			// If it exists, return the indices of the complement and the current number
			return [numToIndex[complement], i];
		}

		// Store the index of the current number in the object
		numToIndex[num] = i;
	}

	// If no solution is found, return an empty array (though the problem guarantees a solution)
	return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
