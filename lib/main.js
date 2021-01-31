//saves typing the right hand side out every time
var dropDown = document.getElementById('topNav');

//opens and closes the display menu on the click of the toggle
function menuDisplay() {
  dropDown.classList.toggle("show"); 
}
//closes the menu when the user clicks anywhere besides the menu area
  window.addEventListener('click', function(event) {
  if (!event.target.matches('.toggle-nav') && !event.target.matches('ul')) {
    if (dropDown.classList.contains("show")) {
      dropDown.classList.toggle("show");
    }
  }
})
  
