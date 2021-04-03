"use strict";

var modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');
modalTrigger.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.documentElement.style.overflow = '';
}

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.documentElement.style.overflow = 'hidden';
}

modal.addEventListener('click', function (e) {
  if (e.target === modal || e.target.getAttribute('data-close') == "") {
    closeModal();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    closeModal();
  }
});