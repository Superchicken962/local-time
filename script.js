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
var finddateinterval = setInterval("finddate()", 1000);

function finddate() {
var getdate = new Date();
var fulldate = getdate.getDate()+'/'+(getdate.getMonth()+1)+'/'+getdate.getFullYear();
document.getElementById("showdate").innerHTML = fulldate;
}

// finding the time and timezone in 24 hr time
var findtimeinterval = setInterval("findtime()", 1000);

function findtime() {
var gettime = new Date();
var timezone = gettime.getTimezoneOffset();
var time = gettime.getHours()+':'+gettime.getMinutes()+':'+gettime.getSeconds();
document.getElementById("showtime").innerHTML = time;
document.getElementById("timezone").innerHTML = timezone;
}

// checking hour to set to AM or PM
var check12hour = new Date();
var t12hours = check12hour.getHours()+''+check12hour.getMinutes();
var amorpm
if (t12hours <= 1159) {
    amorpm = " AM";
} else {
    amorpm = " PM";
}

// time in 12 hr time
var findtimeinterval12 = setInterval("findtime12()", 1000);

function findtime12() {
    var gettime12 = new Date();
    var t12hours = gettime12.getHours();
    var t12minutes = gettime12.getMinutes();
    var t12seconds = gettime12.getSeconds();
    t12hours = t12hours % 12;
    t12hours = t12hours ? t12hours : 12;
    t12minutes = t12minutes < 10 ? '0'+t12minutes : t12minutes;
    var twelvehourtime = t12hours+':'+t12minutes+':'+t12seconds+amorpm;
    document.getElementById("12hourtime").innerHTML = twelvehourtime;
}
// toggling 24 / 12 hour time
function toggle12or24() {
    var twselect = document.getElementById("twelvehourselect");
    var twenselect = document.getElementById("twentyfourhourselect");
    var twelvehr = document.getElementById("twelvehourtext");
    var twentyfourhr = document.getElementById("twentyfourhourtext")
    if (twelvehr.style.display === "none") {
        twelvehr.style.display = "block";
        twentyfourhr.style.display = "none";
        twselect.style.display = "block";
        twenselect.style.display = "none";
    } else {
        twelvehr.style.display = "none";
        twentyfourhr.style.display = "block";
        twselect.style.display = "none";
        twenselect.style.display = "block";
    }
}

function choosecolour() {
    var input = document.getElementById("userinput").value;
    document.getElementById("showdate").style.color = input;
    document.getElementById("twentyfourhourtext").style.color = input;
    document.getElementById("twelvehourtext").style.color = input;
    document.getElementById("twelveselectedtext").style.color = input;
    document.getElementById("twentyfourselectedtext").style.color = input;
    document.getElementById("timezone").style.color = input;
}

function choosecolourpicker() {
    var inputpicker = document.getElementById("userinputpicker").value;
    document.getElementById("showdate").style.color = inputpicker;
    document.getElementById("twentyfourhourtext").style.color = inputpicker;
    document.getElementById("twelvehourtext").style.color = inputpicker;
    document.getElementById("twelveselectedtext").style.color = inputpicker;
    document.getElementById("twentyfourselectedtext").style.color = inputpicker;
    document.getElementById("timezone").style.color = inputpicker;
}

function viewbugs() {
alert('There are currently 2 known bugs.\n\nWhen the time changes over from 11:59pm to 12:00am, the PM / AM will not change unless page is refreshed\n\nwhen you close this menu be sure to click the ok instead of pressing exit or else you will not be able to type in the colour box until you refresh');
}

// finding closest public holiday
/**
function australia() {
}
function southaustralia() {
    
}
*/
