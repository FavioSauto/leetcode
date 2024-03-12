function maxSubArray(nums) {
	let max = nums[0];
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (sum > 0) {
			sum += nums[i];
		} else {
			sum = nums[i];
		}
		max = Math.max(max, sum);
	}

	return max;
}
