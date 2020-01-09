Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of 
each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5




function sumDigits(num) {
	let arr = num.toString().split('').map(val=>parseInt(val)); 
	if (num<0) {
		console.log(arr.slice(2)); 
		return arr.slice(2).reduce((x, y)=>x+y, 0)+arr[1]
	}
	return arr.reduce((x, y)=>x+y, 0); 
}
