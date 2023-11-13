/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let substringStart = 0;
	let maxLength = 0;

	for (i = 0; i < s.length; i++) {
		for (j = substringStart; j < i; j++) {
			if (s[i] == s[j]) {
				substringStart = j + 1;
				break;
			}
		}
		if (i - substringStart + 1 > maxLength) {
			maxLength = i - substringStart + 1;
		}
	}

	return maxLength;
};
