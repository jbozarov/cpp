function findNextSquare(sq) {
  var res = Math.sqrt(sq); 
  return res===parseInt(res) ? Math.pow(res+1, 2) : -1; 
}; 
