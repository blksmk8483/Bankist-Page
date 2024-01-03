'use strict';

///////////////////////////////////////
// MODAL WINDOW
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// OPENS MODAL - this shows the modal and the overlay
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden'); // html line 335
  overlay.classList.remove('hidden'); // html line 351
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); // this is in HTML on line 36 and 295

// CLOSES MODAL - this hides the modal & overlay if I click on the X or outside of the modal
const closeModal = function () {
  modal.classList.add('hidden'); // html line 335
  overlay.classList.add('hidden'); // html line 351
};

btnCloseModal.addEventListener('click', closeModal); // closes if I click on the X
overlay.addEventListener('click', closeModal); // closes if I click outside of the modal box

// This closes the modal if I click on the escape button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
console.log('Selecting, Creating, and Deleting Elements');

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);

// Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
console.log('Styles, Attributes, and Classes');

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

logo.alt = 'Beautiful minamalist logo';

logo.setAttribute('company', 'Bankist');

logo.getAttribute('src');

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
