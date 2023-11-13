/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const nums1Length = nums1.length;
	const nums2Length = nums2.length;

	let newArray = [];

	if (nums2Length === 0) newArray = nums1;
	if (nums1Length === 0) newArray = nums2;

	let left = 0;
	let right = 0;

	while (left + right <= (nums2Length + nums1Length) / 2) {
		if (right === nums2Length || nums1[left] <= nums2[right]) {
			newArray.push(nums1[left]);
			left++;
		} else {
			newArray.push(nums2[right]);
			right++;
		}
	}

	if ((nums1Length + nums2Length) % 2 === 1) {
		return newArray[Math.floor((nums2Length + nums1Length) / 2)];
	} else {
		return (
			(newArray[(nums2Length + nums1Length) / 2] +
				newArray[(nums2Length + nums1Length) / 2 - 1]) /
			2
		);
	}
};
