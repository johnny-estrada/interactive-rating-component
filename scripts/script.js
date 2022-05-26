'use strict';

const form = document.querySelector('#ratings-form');
const input = document.querySelector('#five');
const message = document.querySelector('#msg');

// Radio input

// Button functionality
form.addEventListener('submit', function(e) {
	e.preventDefault();

	const ratingInput = input.value; // 1
	const newP = document.createElement('p'); // <p></p>

	newP.classList.add('text');
	newP.textContent = `You selected ${ratingInput} out of 5`;
	message.appendChild(newP);
});
