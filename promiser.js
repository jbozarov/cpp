function promiser () {
	let i = Math.floor(Math.random()*100); 
	return new Promise ( (response, reject ) => {
		if (i>50) {
			response(i); 
		}
		else {
			reject(i); 
		}
	})
}
promiser()
.then (res => {
	console.log("this is a response ", res)
})
.catch (err => {
	console.log("this is a reject number ", err)
})
