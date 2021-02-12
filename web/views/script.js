'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const button_enter = document.getElementById('button--0');
const body = document.querySelector('body');
const btnCloseCV = document.getElementById('button--x');
const btnCloseSkills = document.getElementById('button--xs');
const button_git = document.getElementById('button--2');
const button_linked = document.getElementById('button--1');
const button_gmail = document.getElementById('img--gmail');
const skills_modal = document.getElementById('skills--modal');
const button_skills = document.getElementById('button--3');
const cv_modal = document.getElementById('cv--modal');

let popUpCV = function () {
  button_skills.classList.add('hidden');
  cv_modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  button_enter.classList.add('hidden');
  button_git.classList.add('hidden');
  body.classList.add('overlay');
  button_linked.classList.add('hidden');
  button_gmail.classList.add('hidden');
};

const closeModal = function () {
  button_skills.classList.remove('hidden');
  cv_modal.classList.add('hidden');
  skills_modal.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('overlay');
  button_gmail.classList.remove('hidden');
  button_enter.classList.remove('hidden');
  button_git.classList.remove('hidden');
  button_linked.classList.remove('hidden');
};
const escBtn = function (event) {
  if (event.key === 'Escape') {
    if (!cv_modal.classList.contains('hidden')) closeModal();
    if (!skills_modal.classList.contains('hidden')) closeModal();
  }
};

const openSkillsModal = function () {
  skills_modal.classList.remove('hidden');
  button_enter.classList.add('hidden');
  button_git.classList.add('hidden');
  body.classList.add('overlay');
  button_linked.classList.add('hidden');
  button_gmail.classList.add('hidden');
};

button_enter.addEventListener('click', popUpCV);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', escBtn);
btnCloseCV.addEventListener('click', closeModal);
btnCloseSkills.addEventListener('click', closeModal);
button_skills.addEventListener('click', openSkillsModal);
