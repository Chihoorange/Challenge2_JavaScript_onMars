function addLeadingZero(number){
	if(number < 10){
		number = '0' + number;
	}
	return number;
}

//--------------Amsterdam-----------------------------
var amsterdamDate = new Date();

document.getElementById ('amsterdamTime').innerHTML = amsterdamDate.getHours() + ':' + addLeadingZero(amsterdamDate.getMinutes()) + ':' + addLeadingZero(amsterdamDate.getSeconds());
document.getElementById('amsterdamToday').innerHTML = amsterdamDate.getDate() + '/' + addLeadingZero(amsterdamDate.getMonth() + 1) + '/' + amsterdamDate.getFullYear();

//--------------London-----------------------------
var londonDate = new Date();
londonDate.setTime(londonDate.getTime() - 1 * 60 * 60 * 1000);


document.getElementById ('londonTime').innerHTML = (londonDate.getHours()-1) + ':' + addLeadingZero(londonDate.getMinutes()) + ':' + addLeadingZero(londonDate.getSeconds());
document.getElementById('londonToday').innerHTML = londonDate.getDate() + '/' + addLeadingZero(londonDate.getMonth() + 1) + '/' + londonDate.getFullYear();

//--------------Tokyo-----------------------------
var tokyoDate = new Date();
tokyoDate.setTime(tokyoDate.getTime() + 8 * 60 * 60 * 1000)

document.getElementById ('tokyoTime').innerHTML = tokyoDate.getHours() + ':' + addLeadingZero(tokyoDate.getMinutes()) + ':' + addLeadingZero(tokyoDate.getSeconds());
document.getElementById('tokyoToday').innerHTML = tokyoDate.getDate() + '/' + addLeadingZero(tokyoDate.getMonth() + 1) + '/' + tokyoDate.getFullYear();












