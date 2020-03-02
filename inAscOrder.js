function inAscOrder(arr) {
  var count = 0; 
	var sliced = arr.slice(); 
  var sorted = arr.sort((a, b)=>a-b); 
  for ( var i=0; i<arr.length; i++) {
    if (sliced[i] !== sorted[i]) {
			count++; 
		}
  }
	return count > 0 ? false : true; 
}
