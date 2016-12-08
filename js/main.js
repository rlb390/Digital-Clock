





function newTime(){

var today = new Date()
var amPm = 'AM'
var seconds = today.getSeconds()
var minutes = today.getMinutes()
var hours = today.getHours()

// set timeOut is a refresh function using ( with function name and number in ms )
setTimeout('newTime()', 1000)


if (hours == 0)
{
	hours = 12
}

// if hours is greater than 12 its subtracts 12 to make it non military time and changes to PM
else if (hours>12)
{
	hours = hours - 12
	amPM= 'PM'
}

// if hours is less than 10 it takes away the 0 adding the correct hour
if ( hours < 10){
	hours= '' + hours
}

// if minutes is less than 10 it adds a 0 to the correct minute
if ( minutes < 10){
	minutes = '0' + minutes
}
// if seconds is less than 10 it adds a 0 to the correct second
if ( seconds < 10){
	seconds= '0' + seconds
}

// adding var to div in html by assinging to id
var myClock = document.getElementById('clockDisplay')

// writing content to new var in HTML to correct clock format
myClock.textContent = hours + ':' + minutes + ":" + seconds +  " "  + amPM
}

newTime()

