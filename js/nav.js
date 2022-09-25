const iconOpen = document.querySelector('#open--nav--ham');
const body = document.getElementById('body');
const iconClose = document.querySelector('#close--nav--ham');

const navContainer = document.getElementById('nav-container');
let visible = false;
iconOpen.addEventListener('click', (e) => {
	const iconClose = document.querySelector('#close--nav--ham');

	if (!visible) {
		// console.log('YES');
		navContainer.style.transform = 'translateX(-5%)';
		iconOpen.classList.add('hidden--nav--bur');
		body.style.overflow = 'hidden';
		iconClose.classList.remove('hidden--nav--bur');
		// iconClose.classList.add('nav--show--link');

		visible = true;
	}
	// } else {
	// 	navContainer.style.transform = 'translateX(100%)';
	// 	visible = false;
	// }
});

iconClose.addEventListener('click', (e) => {
	iconOpen.classList.remove('hidden--nav--bur');
	body.style.overflow = 'unset';
	iconClose.classList.add('hidden--nav--bur');
	navContainer.style.transform = 'translateX(100%)';
	visible = false;
});
const navLinks = document.querySelectorAll('.link');
navLinks.forEach((navlink) => {
	navlink.addEventListener('click', (e) => {
		if (visible) {
			visible = false;
			navContainer.style.transform = 'translateX(100%)';
		}
	});
});
