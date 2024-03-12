function longestCommonPrefix(strs) {
	if (strs.length === 0) return "";
	if (strs.length === 1) return strs[0];

	let prefix = strs[0];

	for (let word of strs) {
		while (word.indexOf(prefix) !== 0) {
			prefix = prefix.slice(0, -1);
			if (prefix === "") return "";
		}
	}

	return prefix;
}
