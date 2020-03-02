Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5

function sortByValueAndIndex(array){
   return array
   .map((a,i) => [ a, a * (i+1)])
   .sort((a,b) => a[1]-b[1])
   .map(a => a[0]);
}
