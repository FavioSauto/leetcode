/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	if (nums.length < 2) {
		return [];
	}

	const complementsMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (complementsMap.has(complement)) {
			return [complementsMap.get(complement), i];
		}

		complementsMap.set(nums[i], i);
	}

	return [];
};
