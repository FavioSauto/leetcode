/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let maxLen = 0;
	let charMap = {};
	let start = 0;

	for (let i = 0; i < s.length; i++) {
		const currentChar = s[i];
		if (charMap[currentChar] >= start) {
			start = charMap[currentChar] + 1;
		}
		charMap[currentChar] = i;
		maxLen = Math.max(maxLen, i - start + 1);
	}

	return maxLen;
};
