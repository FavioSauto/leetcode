function mySqrt(x) {
	let start = 0;
	let end = x;
	let answer = 0;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);

		if (middle * middle > x) {
			end = middle - 1;
		} else {
			answer = middle;
			start = middle + 1;
		}
	}

	return answer;
}
