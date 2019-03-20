function addLeadingZero(number){
	if(number < 10){
		number = '0' + number;
	}
	return number;
}

var timeZone = 0;

setInterval(updateTime, 1000);
function updateTime () {
	var date = new Date();

	//Time and Date//
	date.setTime(date.getTime() + timeZone * 60 * 60 * 1000)

	document.getElementById('today').innerHTML = date.getDate() + '/' + addLeadingZero(date.getMonth() + 1) + '/' + date.getFullYear();

	//animation//
	var animation = ':';
	if (date.getSeconds() % 2 === 1) {
		animation = ' ';
	}

	document.getElementById ('time').innerHTML = addLeadingZero(date.getHours()) + animation + addLeadingZero(date.getMinutes()) + animation + addLeadingZero(date.getSeconds());
};

//--------------Amsterdam-----------------------------
var buttonAmsterdam = document.getElementById('amsterdam');
buttonAmsterdam.onclick = function () {
	timeZone = 0;
	document.getElementById('description').innerHTML = 'Amsterdam';
	document.getElementById('label').className = "labelAmsterdam";

};

//--------------London-----------------------------
var buttonLondon = document.getElementById('london');
buttonLondon.onclick = function () {
	timeZone = -1
	document.getElementById('description').innerHTML = 'London';
	document.getElementById('label').className = "labelLondon";
};


//--------------Tokyo-----------------------------
var buttonTokyo = document.getElementById('tokyo');
buttonTokyo.onclick = function () {
	timeZone = 8
	document.getElementById('description').innerHTML = 'Tokyo';
	document.getElementById('label').className = "labelTokyo";
};



// 	buttonAmsterdam.onclick = function () {
// 		setInterval(updateAmsterdamTime, 1000);
// 			function updateAmsterdamTime (){
// 			var amsterdamDate = new Date();

// 			document.getElementById ('amsterdamTime').innerHTML = amsterdamDate.getHours() + ':' + addLeadingZero(amsterdamDate.getMinutes()) + ':' + addLeadingZero(amsterdamDate.getSeconds());
// 			document.getElementById('amsterdamToday').innerHTML = amsterdamDate.getDate() + '/' + addLeadingZero(amsterdamDate.getMonth() + 1) + '/' + amsterdamDate.getFullYear();
// 			};
// };
// //--------------London-----------------------------
// setInterval(updateLondonTime, 1000);
// function updateLondonTime () {
// 	var londonDate = new Date();
// 	londonDate.setTime(londonDate.getTime() - 1 * 60 * 60 * 1000);

// 	document.getElementById ('londonTime').innerHTML = londonDate.getHours() + ':' + addLeadingZero(londonDate.getMinutes()) + ':' + addLeadingZero(londonDate.getSeconds());
// 	document.getElementById('londonToday').innerHTML = londonDate.getDate() + '/' + addLeadingZero(londonDate.getMonth() + 1) + '/' + londonDate.getFullYear();
// };

// //--------------Tokyo-----------------------------
// setInterval(updateTokyoTime, 1000);
// function updateTokyoTime () {
// 	var tokyoDate = new Date();
// 	tokyoDate.setTime(tokyoDate.getTime() + 8 * 60 * 60 * 1000)

// 	document.getElementById ('tokyoTime').innerHTML = tokyoDate.getHours() + ':' + addLeadingZero(tokyoDate.getMinutes()) + ':' + addLeadingZero(tokyoDate.getSeconds());
// 	document.getElementById('tokyoToday').innerHTML = tokyoDate.getDate() + '/' + addLeadingZero(tokyoDate.getMonth() + 1) + '/' + tokyoDate.getFullYear();
// };











