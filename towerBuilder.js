
for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]


function towerBuilder(nFloors) {
   var arr = []; 
   for (var i=1; i<=nFloors; i++) {
     arr.push('*'.repeat(i*2-1)); 
   }
   for (m=0; m<arr.length; m++) {
		 var space = ' '.repeat(arr.length-1-m); 
		 arr[m] = space+arr[m]+space; 
	 }
	 return arr; 
}
