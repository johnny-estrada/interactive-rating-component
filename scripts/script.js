'use strict';

const form = document.querySelector('#ratings-form');

const input = document.querySelector('#five');

const output = document.querySelector('#msg');

// Button functionality
form.addEventListener('submit', (f) => {
	f.preventDefault();

	const rating = input.value; // 1
	const paragraph = document.createElement('p'); // <p></p>
	const toggle = document.querySelector('.ratings');

	toggle.style.display = 'none';

	paragraph.classList.add('text');
	paragraph.textContent = `You selected ${rating} out of 5`;
	output.appendChild(paragraph);
});
