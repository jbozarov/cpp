


var countBits = function(n) {
  var bin = n.toString(2); 
  let count = 0; 
  for (var char of bin.toString())  {
  if (char === '1') count++
  }
  return count
};
