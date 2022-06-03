'use strict';

const form = document.querySelector('#ratings-form');
const input = document.querySelector('#five');
const output = document.querySelector('#msg');

// Radio input

// Button functionality
form.addEventListener('submit', function(e) {
	e.preventDefault();

	const rating = input.value; // 1
	const paragraph = document.createElement('p'); // <p></p>

	paragraph.classList.add('text');
	paragraph.textContent = `You selected ${rating} out of 5`;
	output.appendChild(paragraph);
});
