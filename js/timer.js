window.addEventListener('load', (event) => {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	var today = new Date('Oct 21, 2022');
	var newdate = new Date();

	let countDown = new Date('Nov 25, 2022');
	// const timerCon=document.querySelector()
	setInterval(function () {
		let now = new Date().getTime(),
			distance = countDown - now;
		if (distance < 0) {
			distance = 0;
		}
		
		(document.getElementById('days').innerText = Math.floor(distance / day)),
			(document.getElementById('hours').innerText = Math.floor(
				(distance % day) / hour
			)),
			(document.getElementById('minutes').innerText = Math.floor(
				(distance % hour) / minute
			)),
			(document.getElementById('seconds').innerText = Math.floor(
				(distance % minute) / second
			));

			if(distance===0){
				document.getElementById('timerContainer').classList.add('hideThis');
				document.getElementById('regStatus').innerText="Registrations Closed"
			}
			
	}, second);

	if (window.innerWidth < 799) {
		document.querySelector('.wrapper-timer').style.height =
			window.innerHeight + 'px';
	}
});
