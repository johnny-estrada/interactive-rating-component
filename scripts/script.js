'use strict';

const form = document.querySelector('.ratings-form');
const ratingsCard = document.querySelector('.ratings');
const button = document.querySelector('.btn-primary');

const thankYouCard = document.querySelector('.thank-you');
const message = document.querySelector('#msg');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const ratingValue = document.querySelector('input[name="rating"]:checked').value;
	const paragraph = document.createElement('p'); // <p></p>

	ratingsCard.style.display = 'none';
	thankYouCard.style.display = 'flex';

	paragraph.classList.add('text');
	paragraph.textContent = `You selected ${ratingValue} ouf of 5`;
	message.appendChild(paragraph);
});
