function CultureRandom() {
	let arr = [];
	let i = 0;
	while (i < 2) {
		let n = Math.floor(Math.random() * 4);
		if (!sameNum(n)) {
			arr.push(n);
			i++;
		}
	}

	function sameNum(n: Number) {
		for (var i = 0; i < arr.length; i++) {
			if (n === arr[i]) {
				return true;
			}
		}
		return false;
	}
	console.log(arr);
	return arr;
}

export default CultureRandom;
