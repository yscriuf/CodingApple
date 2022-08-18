// error
// function 함수명(x :number | string) {
// 	return x * 2;
// }

// okay
function 함수명(x :number | string) {
	if (typeof x === 'number') {
		return x * 2;
	}
}