


function isIsogram(str){
	var count = 0; 
  for (var i=0; i<str.length; i++) {
		var es = str.slice(i+1) 
		if (es.includes(str.charAt(i)) || es.includes(str.charAt(i).toUpperCase()) || es.includes(str.charAt(i).toLowerCase())) {
			count ++; 
			console.log(es, str.charAt(i), count)
		} 
	}
	return count === 0 ? true : false; 
}
