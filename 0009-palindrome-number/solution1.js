function isPalindrome(x) {
	if (x < 0) return false;
	return x === Number(String(x).split("").reverse().join(""));
}
