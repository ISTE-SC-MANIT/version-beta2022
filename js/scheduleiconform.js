const tabs = document.querySelectorAll('.operations__tab ');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
tabContainer.addEventListener('click', function (e) {
	const id = e.target.closest('.operations__tab');
	console.log(id);
	if (!id) return;

	tabs.forEach((t) => t.classList.remove('operations__tab--active'));
	id.classList.add('operations__tab--active');
	tabContent.forEach((t) => t.classList.remove('operations__content--active'));
	//Activate content area
	document
		.querySelector(`.operations__content--${id.dataset.tab}`)
		.classList.add('operations__content--active');
});
