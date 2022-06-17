'use strict';

function submitForm() {
	const ratingsCard = document.querySelector('.ratings');
	const form = document.querySelector('.ratings-form');
	const button = document.querySelector('.btn-primary');

	const thankYouCard = document.querySelector('.thank-you');
	const message = document.querySelector('#msg');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const rating = document.querySelector('input[name="rating"]:checked').value;
		const paragraph = document.createElement('p'); // <p></p>

		paragraph.classList.add('text');
		paragraph.textContent = `You selected ${rating} ouf of 5`;
		message.appendChild(paragraph);

		ratingsCard.style.display = 'none';
		thankYouCard.style.display = 'flex';
	});
}

submitForm();
