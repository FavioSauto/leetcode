/**
 * @param {string} lengths
 * @return {number}
 */
var lengthOfLongestSubstring = function (string) {
	let substring = "";

	const lengths = [];

	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		const existing = substring.indexOf(char);

		if (existing !== -1) {
			lengths.push(substring.length);
			substring = substring.slice(existing + 1);
		}

		substring += char;
	}

	lengths.push(substring.length);

	return Math.max.apply(null, lengths);
};
