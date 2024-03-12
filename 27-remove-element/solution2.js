function removeElement(nums, val) {
	let left = 0;
	let right = nums.length;
	while (left < right) {
		if (nums[left] === val) {
			nums[left] = nums[right - 1];
			right--;
		} else {
			left++;
		}
	}
	return left;
}
