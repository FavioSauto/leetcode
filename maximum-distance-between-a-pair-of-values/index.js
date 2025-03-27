/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let i = 0,
    j = 0;

  let ans = 0;
  while (i < nums1.length && j < nums2.length) {
    // Maintain the i <= j invariant
    j = Math.max(j, i);

    // We want to maximize j so move it forward whenerver possible
    while (nums1[i] <= nums2[j]) {
      ans = Math.max(ans, j - i);

      j++;
    }

    i++;
  }

  return ans;
};
