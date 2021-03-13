//setting public holidays
//national holidays
var nyd = 1/01/2021 // new year's day
var ad = 26/01/2021 // australia day
var gf = 2/04/2021 // good friday
var hs = 3/04/2021 // holy saturday
var em = 5/04/2021 // easter monday
var azd = 25/04/2021 // anzac day
var cd = 27/12/2021 // christmas day
var bd = 28/12/2021 // boxing day
//south australia
var acd = 8/03/2021 // adelaide cup day

// finding the date
var getdate = new Date();
var fulldate = getdate.getDate()+'/'+(getdate.getMonth()+1)+'/'+getdate.getFullYear();
document.getElementById("showdate").innerHTML = fulldate;

// checking hour to set to AM or PM
var checkhour = new Date();
var hour = checkhour.getHours();
var amorpm
if (hour <= 12) {
    amorpm = " AM";
} else {
    amorpm = " PM";
}

// finding the time and timezone
var findtimeinterval = setInterval("findtime()", 1000);

function findtime() {
var gettime = new Date();
var timezone = gettime.getTimezoneOffset();
var time = gettime.getHours()+':'+gettime.getMinutes()+':'+gettime.getSeconds()+amorpm
document.getElementById("showtime").innerHTML = time;
document.getElementById("timezone").innerHTML = timezone;
}

//
function australia() {

}

function southaustralia() {
    
}