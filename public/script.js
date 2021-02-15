"use strict";

let main_el = document.querySelector("main");
let overlay_el = document.querySelector(".overlay");
let modal_el = document.querySelector(".modal");
let button_enter = document.getElementById("button--0");
let body = document.querySelector("body");
let btnCloseCV = document.getElementById("button--x");
let btnCloseSkills = document.getElementById("button--xs");
let btnCloseObj = document.getElementById("button--xo");
let button_git = document.getElementById("button--2");
let button_linked = document.getElementById("button--1");
let button_gmail = document.getElementById("img--gmail");
let skills_modal = document.getElementById("skills--modal");
let button_skills = document.getElementById("button--3");
let button_obj = document.getElementById("button--4");
let cv_modal = document.getElementById("cv--modal");
let objective_modal = document.getElementById("objective--modal");

let openObjectModal = function () {
  objective_modal.classList.remove("hidden");
  button_skills.classList.add("hidden");
  overlay_el.classList.remove("hidden");
  button_enter.classList.add("hidden");
  button_git.classList.add("hidden");
  body.classList.add("overlay");
  button_linked.classList.add("hidden");
  button_gmail.classList.add("hidden");
};
let popUpCV = function () {
  cv_modal.classList.remove("hidden");
  button_skills.classList.add("hidden");
  overlay_el.classList.remove("hidden");
  button_enter.classList.add("hidden");
  button_obj.classList.add("hidden");
  button_git.classList.add("hidden");
  body.classList.add("overlay");
  button_linked.classList.add("hidden");
  button_gmail.classList.add("hidden");
};

let closeModal = function () {
  objective_modal.classList.add("hidden");
  skills_modal.classList.add("hidden");
  cv_modal.classList.add("hidden");
  overlay_el.classList.add("hidden");
  button_skills.classList.remove("hidden");
  button_obj.classList.remove("hidden");
  body.classList.remove("overlay");
  button_gmail.classList.remove("hidden");
  button_enter.classList.remove("hidden");
  button_git.classList.remove("hidden");
  button_linked.classList.remove("hidden");
};
let escBtn = function (event) {
  if (event.key === "Escape") {
    if (!cv_modal.classList.contains("hidden")) closeModal();
    if (!skills_modal.classList.contains("hidden")) closeModal();
    if (!objective_modal.classList.contains("hidden")) closeModal();
  }
};

let openSkillsModal = function () {
  skills_modal.classList.remove("hidden");
  button_enter.classList.add("hidden");
  button_git.classList.add("hidden");
  button_obj.classList.add("hidden");
  body.classList.add("overlay");
  button_linked.classList.add("hidden");
  button_gmail.classList.add("hidden");
  // button_skills.classList.add('hidden');
};
let openCloseModalSkill = function (e) {
  console.log(e.target.innerHTML === "skills");
  if (!skills_modal.classList.contains("hidden")) {
    skills_modal.classList.toggle("hidden");
    button_skills.classList.toggle("hidden");
    button_linked.classList.toggle("hidden");
    button_gmail.classList.toggle("hidden");
    button_obj.classList.toggle("hidden");
    button_git.classList.toggle("hidden");
    button_enter.classList.toggle("hidden");
    body.classList.toggle("overlay");
  }
  if (e.target.innerHTML === "skills") {
    button_obj.classList.toggle("hidden");
    skills_modal.classList.toggle("hidden");
    button_skills.classList.toggle("hidden");
    button_linked.classList.toggle("hidden");
    button_gmail.classList.toggle("hidden");
    button_git.classList.toggle("hidden");
    button_enter.classList.toggle("hidden");
    body.classList.toggle("overlay");
  }
};

if (button_obj) button_obj.addEventListener("click", openObjectModal);
if (button_enter) button_enter.addEventListener("click", popUpCV);
if (document) document.addEventListener("keydown", escBtn);
if (btnCloseCV) btnCloseCV.addEventListener("click", closeModal);
if (btnCloseSkills) btnCloseSkills.addEventListener("click", closeModal);
if (btnCloseObj) btnCloseObj.addEventListener("click", closeModal);
if (overlay_el) overlay_el.addEventListener("click", closeModal);
if (main_el) main_el.addEventListener("click", openCloseModalSkill);
