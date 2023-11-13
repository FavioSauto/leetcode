/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const hashSet = new Set();
	let left = 0,
		right = 0,
		ans = 0;
	while (right < s.length) {
		while (hashSet.has(s[right])) {
			hashSet.delete(s[left]);
			left += 1;
		}

		hashSet.add(s[right]);
		ans = Math.max(ans, right - left + 1);
		right += 1;
	}
	return ans;
};
