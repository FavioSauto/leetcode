function lengthOfLastWord(string) {
	const words = string.trim().split(" ");
	return words[words.length - 1].length;
}
