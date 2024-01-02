'use strict';

///////////////////////////////////////
// Modal window
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
