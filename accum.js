This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {
	var arr = s.split('')
	var sliced = arr.slice()
	 for (var i=1; i<arr.length; i++) {
		 for (var k=0; k<i; k++) {
			 arr[i]+=sliced[i]; 
		 }
	 }
	var res = arr.map(v => v.toLowerCase())
  return res.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())).join('-'); 
}
