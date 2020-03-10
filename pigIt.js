


function pigIt(str){
  const arr = str.split(' ').map(function(v){
		var first = v.charAt(0)
		var sliced = v.slice(1); 
		v = sliced+first; 
		return v
	})
	return arr.map(function(val){
		if (val.match(/[A-z]/g)){
			val = val + 'ay'
		}
		return val; 
	}).join(' ')
}
