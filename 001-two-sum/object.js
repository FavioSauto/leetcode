/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	if (nums.length < 2) {
		return [];
	}

	const complementsMap = {};

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (complementsMap[complement] !== undefined) {
			return [complementsMap[complement], i];
		}

		complementsMap[nums[i]] = i;
	}

	return [];
};
