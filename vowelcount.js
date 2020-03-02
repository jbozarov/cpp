function getCount(str) {
  var vowelsCount = 0;
  for ( var i=0; i<str.length; i++ ) {
		if ('aeuoi'.includes(str.charAt(i))){
			vowelsCount ++; 
		}
	} 
  return vowelsCount;
}
