// Immutable objects changing, copying objects 


var oldObj = {
	name: 'john', 
	age: 34, 
}

console.log(oldObj); //{ name: 'john', age: 34 }

var newObj = oldObj; 

console.log(newObj); //{ name: 'john', age: 34 } 
newObj===oldObj // true 

// now when we change old obj or new obj, both obj will be changes because old and new obj are referencing to same object. 
oldObj.name = 'Jahongir'; 
console.log(newObj); //{ name: 'Jahongir', age: 34 }



//Copying objects: 

var oldObj1 = {name: 'john1', age: 44}
var newObj1 = Object.assign({}, oldObj1); 
console.log(oldObj1) //{ name: 'john1', age: 44 }
console.log(oldObj1 === newObj1) // false even we did just create same copy, because they are different objects. 

//Now lets change one of them and check the other one: 
oldObj1.age = 54; 
console.log(newObj1) //{ name: 'john1', age: 44 }, age is not 54
console.log(oldObj1) //{ name: 'john1', age: 54 }


//But there is one thing we need to understand: 
// lets create new objects and see example: 

var oldObj3 = {
	name: 'malika', 
	age: 33, 
	clothes: {shoes: 'red', t_shert: 'blue'}
}

var newObj3 = Object.assign({}, oldObj3); 
console.log(newObj3) // { name: 'malika',  age: 33,  clothes: { shoes: 'red', t_shert: 'blue' }} so far fine, because we just got the copy, but: 

//let's make some changes: 
newObj3.name = 'malikaGood'; 
//newObj3.clothes.shoes = 'yellow'; 
// se we changed 2 properties of newObj3: 
console.log(newObj3);

  //{ name: 'malikaGood',
  // age: 33,
  // clothes: { shoes: 'yellow', t_shert: 'blue' }}
	//so we changed both name and shoes in clothes: 

	console.log(oldObj3); 
	//{ name: 'malika',
  // age: 33,
  // clothes: { shoes: 'yellow', t_shert: 'blue' } }
	//NOW we can see that name is not changed but shoes in clothes are changed because key clothes is just var placeholder

	//if i wanna not change the second object i need to do this way: 
	// so instead of pointing to clothes, I just have to create new one: 

//newObj3.clothes.shoes - wrong 
newObj3.clothes = {shoes: 'yellow', t_shert: 'blue'}

// now: 
	console.log(newObj3) // { name: 'malikaGood', age: 33, clothes: { shoes: 'yellow', t_shert: 'blue' }} 
	//we changed name and clothes.shoes 

	console.log(oldObj3) // { name: 'malika', age: 33, clothes: { shoes: 'red', t_shert: 'blue' }}
	//So we did not change oldObj3 at all 


