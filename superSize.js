function superSize(num){
	var arr = num.toString().split('')
	return parseInt(arr.map(a => Number(a)).sort((a, b)=> b-a).join(''))
}
