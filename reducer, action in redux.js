//Reducer, action in redux: 


var state = {
	name: 'John', 
	number: 34
}

var action = {
	type: 'name_changer', 
	payload: 'Jahongir'
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
				 number: state.number+action.payload 
			 }
		 }
		 case 'decrement' : {
			 return {
				 name: state.name, 
				 number: state.number + action.payload  
			 }
		 }
	 }
}
reducer (state, action); //{ number: 34, name: 'Jahongir' }



var action2 = {
	type: 'increment', 
	payload: 1
}
reducer (state, action2); //{ number: 35, name: 'John' }



var action3 = {
	type: 'decrement', 
	payload: -1
}
reducer (state, action3); // { name: 'John', number: 33 }
