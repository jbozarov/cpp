Create a constructor function called Player. Player should take in four parameters: name, age, team, and 
pointsScored and use these four parameters to return a new object. 
You should also create a method named addPoints inside of this constructor function. This method should 
take in a number parameter. This number parameter should be added to the players pointsScored changing the pointsScored value and then return the updated pointsScored.




function Player (name, age, team, pointsScored){
		this.name = name; 
		this.age = age; 
		this.team=team; 
		this.pointsScored=pointsScored; 
		this.addPoints=function (number){
			this.pointsScored+=number; 
			return this.pointsScored; 
		}
}
