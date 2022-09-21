// 'use strict';
// const button = document.querySelectorAll('.btn');
// // console.log(button);

// button.forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		const id = btn.nextElementSibling;
// 		console.log(id);

// 		if (id.classList.contains('not-show')) {
// 			btn.innerHTML = 'Hide';
// 			id.classList.remove('not-show');
// 		} else {
// 			btn.innerHTML = 'View More';
// 			id.classList.add('not-show');
// 		}
// 	});
// });
// const contents = document.querySelectorAll('.content');
// contents.forEach((c) => {
// 	c.addEventListener('mouseout', () => {});
// });

var acc = document.getElementsByClassName('btn');
var panel = document.getElementsByClassName('content--');

for (var i = 0; i < acc.length; i++) {
	acc[i].onclick = function () {
		var setClasses = !this.classList.contains('active');
		setClass(acc, 'active', 'remove');
		setClass(panel, 'show', 'remove');
		// this.innerHTML = 'Hide';

		if (setClasses) {
			this.classList.toggle('active');
			this.nextElementSibling.classList.toggle('show');
			// this.innerHTML = 'Hide';
		} else {
			this.innerHTML = 'View More';
		}
	};
	this.innerHTML = 'View more';
}

function setClass(els, className, fnName) {
	for (var i = 0; i < els.length; i++) {
		els[i].classList[fnName](className);
		// this.innerHTML = 'Hide';
	}
}

// });
