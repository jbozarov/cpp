Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number 
of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']


function solution(str){
   var arr = []; 
	 for (let i=1; i<=str.length; i++){
		 if (i%2===0){
			 arr.push(str.slice(i-2, i))
		 }
	 }
	 if (str.length%2!==0){
		 arr.push(str.charAt(str.length-1)+'_'); 
	 } 
	 return arr; 
}
