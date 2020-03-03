if char exists as property of obj then we add, else we create new property and set its value 1 


function foo (str) {
	let obj = {}
	for (let char of str) {
		if (obj[char]){
			obj[char]++
		}
		else obj[char]=1; 
	}
	return obj
}

foo('test')
