Write a function, which takes a non-negative integer (seconds) as input and returns the time in a 
human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)


function humanReadable(seconds) {
  var minSec = seconds%3600; 
	var hours = (seconds-minSec)/3600
	var mins = Math.floor((seconds-hours*3600)/60)
	var secs = seconds - hours*3600 - mins*60; 
	if (hours.toString().length<2){
		hours = '0'+hours; 
	} 
	if (mins.toString().length<2){
		mins = '0'+mins; 
	} 
	if (secs.toString().length<2){
		secs = '0'+secs; 
	} 
  return hours+':'+mins+':'+secs
}
