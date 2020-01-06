Once upon a time, on a way through the old wild west,…
… a man was given directions to go from one point to another. The directions 
were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild 
west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you 
might die of thirst!

How I crossed the desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].



function dirReduc (arr) {
	let obj = {}; 
	var arr1 = [].concat.apply([], arr); 
	arr1.forEach(val=> {
		obj[val]=1+(obj[val] || 0)
	})

if (obj.NORTH && obj.SOUTH) {
	  if (obj.SOUTH>obj.NORTH) {
		obj.SOUTH = obj.SOUTH-obj.NORTH; 
		delete obj.NORTH; 
	}
   	else if (obj.NORTH>obj.SOUTH) {
		obj.NORTH = obj.NORTH-obj.SOUTH; 
		delete obj.SOUTH; 
	}
   	else if (obj.NORTH===obj.SOUTH) {
		delete obj.SOUTH; 
		delete obj.NORTH; 
	}
}
 
if (obj.EAST && obj.WEST){
		if (obj.EAST>obj.WEST) {
		obj.EAST=obj.EAST-obj.WEST; 
		delete obj.WEST; 
	}
	  else if (obj.WEST>obj.EAST) {
		obj.WEST=obj.WEST-obj.EAST; 
		delete obj.EAST; 
	}
	  else if (obj.WEST===obj.EAST) {
		delete obj.WEST; 
		delete obj.EAST; 
	}
}
	let array = Object.entries(obj);  
	let res = []; 
	for (var i=0; i<array.length; i++) {
		for (var k=1; k<=array[i][1]; k++) {
		  res.push(array[i][0]); 
		}
	}
	return res; 
}
