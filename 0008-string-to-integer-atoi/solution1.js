function myAtoi(s) {
	const INT_MAX = 2147483647;
	const INT_MIN = -2147483648;
	const maxDiv10 = Math.floor(INT_MAX / 10);

	let i = 0;
	const n = s.length;
	while (i < n && s[i] === " ") {
		i++;
	}

	let sign = 1;
	if (i < n && (s[i] === "+" || s[i] === "-")) {
		sign = s[i++] === "+" ? 1 : -1;
	}

	let num = 0;
	while (i < n && s[i] >= "0" && s[i] <= "9") {
		const digit = s[i] - "0";
		if (num > maxDiv10 || (num === maxDiv10 && digit >= 8)) {
			return sign === 1 ? INT_MAX : INT_MIN;
		}
		num = num * 10 + digit;
		i++;
	}
	return sign * num;
}
