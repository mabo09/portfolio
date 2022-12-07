
function displayTime(){
	var dateTime = new Date();
	var jam = dateTime.getHours();
	var minit = dateTime.getMinutes();
	var saat = dateTime.getSeconds();
	var session = document.getElementById('session');
	
	if(jam >= 12){
		session.innerHTML = 'PM';
	}else{
		session.innerHTML = 'AM';
	}
	
	if(jam > 12){
		jam = jam - 12;
	}
	
	document.getElementById('hours').innerHTML = jam;
	document.getElementById('minutes').innerHTML = minit;
	document.getElementById('seconds').innerHTML = saat;
}
setInterval(displayTime,10)


alert('hi there! thank you for visiting my page :^')