Your task is to find all the elements of an array that are non consecutive.

A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

Create a function named allNonConsecutive

E.g., if we have an array [1,2,3,4,6,7,8,10] then 6 and 10 are non-consecutive.

You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

E.g., for the above array the result should be:

[
  {i: 4, n:6},
  {i: 7, n:10}
]


function allNonConsecutive (arr) {
	var res = []; 
	for (var i=1; i<arr.length; i++){
		if (arr[i]!==arr[i-1]+1){
			res.push({i: i, n: arr[i]})
		}
	}
	return res; 
}
