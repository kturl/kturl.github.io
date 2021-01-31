const toggle = document.querySelector('.toggle');
const navMenu = document.getElementById('navMenu');
const navItem = document.querySelectorAll('.navItem');

// const carot = document.getElementById('carot');

toggle.addEventListener('click', toggleMenu);
// carot.addEventListener('click', toggleMenu);
function toggleMenu() {
  navMenu.classList.toggle('flexShow');
  removeMenu();
}

function removeMenu() { 
  window.addEventListener('click', function(event) {  
  let clickedItem = event.target;
    if (!clickedItem.matches('.toggle') && !clickedItem.matches('.navItem') && !clickedItem.matches('.far')) {
      if (navMenu.classList.contains('flexShow')) {
    // console.log(clickedItem);
    
      navMenu.classList.toggle('flexShow');
        console.log(clickedItem);
      }
    }
  });
}
// navMenu.addEventListener('click', closeMenu);





// function removeMenu() {
//   window.addEventListener('click', function(e) {
//     if (!e.target.matches('navMenu') && navMenu.classList.contains('flexshow')) {
//         navMenu.classList.toggle('flexShow');
//       }
//   });
// }