'use strict';

const main = document.querySelector('main');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const button_enter = document.getElementById('button--0');
const body = document.querySelector('body');
const btnCloseCV = document.getElementById('button--x');
const btnCloseSkills = document.getElementById('button--xs');
const btnCloseObj = document.getElementById('button--xo');
const button_git = document.getElementById('button--2');
const button_linked = document.getElementById('button--1');
const button_gmail = document.getElementById('img--gmail');
const skills_modal = document.getElementById('skills--modal');
const button_skills = document.getElementById('button--3');
const button_obj = document.getElementById('button--4');
const cv_modal = document.getElementById('cv--modal');
const objective_modal = document.getElementById('objective--modal');

let openObjectModal = function () {
  objective_modal.classList.remove('hidden');
  button_skills.classList.add('hidden');
  overlay.classList.remove('hidden');
  button_enter.classList.add('hidden');
  button_git.classList.add('hidden');
  body.classList.add('overlay');
  button_linked.classList.add('hidden');
  button_gmail.classList.add('hidden');
};
let popUpCV = function () {
  cv_modal.classList.remove('hidden');
  button_skills.classList.add('hidden');
  overlay.classList.remove('hidden');
  button_enter.classList.add('hidden');
  button_obj.classList.add('hidden');
  button_git.classList.add('hidden');
  body.classList.add('overlay');
  button_linked.classList.add('hidden');
  button_gmail.classList.add('hidden');
};

const closeModal = function () {
  objective_modal.classList.add('hidden');
  skills_modal.classList.add('hidden');
  cv_modal.classList.add('hidden');
  overlay.classList.add('hidden');
  button_skills.classList.remove('hidden');
  button_obj.classList.remove('hidden');
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
    if (!objective_modal.classList.contains('hidden')) closeModal();
  }
};

const openSkillsModal = function () {
  skills_modal.classList.remove('hidden');
  button_enter.classList.add('hidden');
  button_git.classList.add('hidden');
  button_obj.classList.add('hidden');
  body.classList.add('overlay');
  button_linked.classList.add('hidden');
  button_gmail.classList.add('hidden');
  // button_skills.classList.add('hidden');
};
const openCloseModalSkill = function (e) {
  console.log(e.target.innerHTML == 'skills');
  if (!skills_modal.classList.contains('hidden')) {
    skills_modal.classList.toggle('hidden');
    button_skills.classList.toggle('hidden');
    button_linked.classList.toggle('hidden');
    button_gmail.classList.toggle('hidden');
    button_obj.classList.toggle('hidden');
    button_git.classList.toggle('hidden');
    button_enter.classList.toggle('hidden');
    body.classList.toggle('overlay');
  }
  if (e.target.innerHTML == 'skills') {
    button_obj.classList.toggle('hidden');
    skills_modal.classList.toggle('hidden');
    button_skills.classList.toggle('hidden');
    button_linked.classList.toggle('hidden');
    button_gmail.classList.toggle('hidden');
    button_git.classList.toggle('hidden');
    button_enter.classList.toggle('hidden');
    body.classList.toggle('overlay');
  }
};

button_obj.addEventListener('click', openObjectModal);
button_enter.addEventListener('click', popUpCV);
document.addEventListener('keydown', escBtn);
btnCloseCV.addEventListener('click', closeModal);
btnCloseSkills.addEventListener('click', closeModal);
btnCloseObj.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
main.addEventListener('click', openCloseModalSkill);
