'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// OPENS MY MODAL - this shows the modal and the overlay
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden'); // html line 335
  overlay.classList.remove('hidden'); // html line 351
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// CLOSES MY MODAL - this hides it when I click on it
const closeModal = function () {
  modal.classList.add('hidden'); // html line 335
  overlay.classList.add('hidden'); // html line 351
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// This closes the modal if I click outside of the box
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
