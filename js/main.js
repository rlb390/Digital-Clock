





function newTime(){

var today = new Date()
var amPm = 'AM'
var seconds = today.getSeconds()
var minutes = today.getMinutes()
var hours = today.getHours()

setTimeout('newTime()', 1000)

if (hours == 0)
{
	hours = 12
}

else if (hours>12)
{
	hours = hours - 12
	amPM= 'PM'
}
if ( hours < 10){
	hours= '0' + hours
}
if ( minutes < 10){
	minutes = '0' + minutes
}
if ( seconds < 10){
	seconds= '0' + seconds
}
var myClock = document.getElementById('clockDisplay')
myClock.textContent = hours + ':' + minutes + ":" + seconds + amPM
}

newTime()

