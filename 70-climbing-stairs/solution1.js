function climbStairs(n) {
	let values = [];

	for (let i = 1; i <= n; i++) {
		if (i == 1) {
			values[i] = 1;
		} else if (i == 2) {
			values[i] = 2;
		} else {
			values[i] = values[i - 1] + values[i - 2];
		}
	}

	return values[n];
}
