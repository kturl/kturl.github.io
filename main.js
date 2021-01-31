const overlay = document.getElementById('overlay');
const signUpOverlay = document.getElementById('signUpOverlay');
const signInOverlay = document.getElementById('signInOverlay');
const container = document.getElementById('container');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');

//click sign in button
signInBtn.addEventListener('click', toggleSlide);
signUpBtn.addEventListener('click', toggleSlide);

function toggleSlide() {
  if (overlay.classList.contains('slide')) {
    overlay.classList.toggle('slideBack');
    overlay.classList.toggle('slide');
  }
    overlay.classList.toggle('slide');
    signInOverlay.classList.toggle("isVisible");
    signInOverlay.classList.toggle("notVisible");
    signUpOverlay.classList.toggle("notVisible");
    signUpOverlay.classList.toggle("isVisible");
}