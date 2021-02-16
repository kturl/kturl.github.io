const frontPage = document.getElementById('frontPage');
const insideMain = document.getElementById('insideMain');
const insideLeft = document.getElementById('insideLeft');

frontPage.addEventListener('click', function() {
  frontPage.classList.toggle('is-flipped-cover');
  insideLeft.classList.toggle('is-flipped-left');
});
insideLeft.addEventListener('click', function() {
  insideLeft.classList.toggle('is-flipped-left');
  frontPage.classList.toggle('is-flipped-cover');
});
insideMain.addEventListener('click', function() {
  insideLeft.classList.toggle('is-flipped-left');
  frontPage.classList.toggle('is-flipped-cover');
});