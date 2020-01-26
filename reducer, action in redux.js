
//Reducer, action in redux: 


var state = {
	name: 'John', 
	number: 34
}


var action1 = {
	type: 'name_changer', 
	payload: 'Jahongir'
}


var action2 = {
	type: 'increment'
}

var action3 = {
	type: 'decrement'
}


function reducer (state, action) {
	 switch(action.type) {
		 case 'name_changer': {
			 return {
				 number: state.number, 
				 name: action.payload
			 }
		 }
		 case 'increment' : {
			 return {
				 name: state.name,
				 number: state.number + 1
			 }
		 }
		 case 'decrement' : {
			 return {
				 name: state.name, 
				 number: state.number - 1
			 }
		 }
	 }
}

var newState1 = reducer (state, action1); //{ number: 34, name: 'Jahongir' }
var newState2 = reducer (state, action2); //{ number: 35, name: 'John' }
var newState3 = reducer (state, action3); // { name: 'John', number: 33 }


//KEEP in mind that reducer function returns new state which is different from old state. 

newState1 === state // false 
newState2 === state // false 
newState3 === state // false 
newState1 === newState2 // false 
