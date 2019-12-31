////////////Problem #2////////////
// Below is a function that is intended to take in a string, and return the number of vowels in the string.
// The function is currently broken, and not working properly.
// Your goal is to resolve the bugs without substantially altering the intended approach for solving the problem. 
//test data
var vowelString = "Bob Ross can see the 4th dimension" //should return 10
function vowelCounter(str) {
  str.split('')
  let total = 0;
  str.forEach(item, i => {
    switch (item) {
      case 'A':
        total += total++
        break;
      case 'E':
        total += total++
        break;
      case 'I':
        total += total++
        break;
      case 'o':
        total += total++
        break;
      case 'U'
        total += total++
        break;
    }
    return
  }
  
  
  
  ANSWER: 
  
  function vowelCounter(str) {
  var arr = str.split('').map(v=>v.toUpperCase()); 
  var total = 0;
  arr.forEach(item => {
    switch (item) {
      case 'A':
        total++
        break;
      case 'E':
        total++
        break;
      case 'I':
        total++
        break;
      case 'O':
        total++
        break;
      case 'U':
        total++
        break;
    }
  })
    return total; 
}
