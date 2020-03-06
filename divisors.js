divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"



function divisors(integer) {
  var arr = []; 
  for (var i=2; i<integer; i++ ) {
  if (integer%i===0)
  arr.push(i)
  }
  if (arr.length<1) return integer+` is prime` 
  return arr; 
};
