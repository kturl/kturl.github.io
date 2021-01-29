const toggle = document.getElementById('toggle');
const navMenu = document.getElementById('navMenu');

toggle.addEventListener('click', toggleMenu);

// navMenu.addEventListener('click', closeMenu);

function toggleMenu() {
  
  if (navMenu.classList.contains('flexshow') || navMenu.style.display === "") {
    navMenu.classList.toggle('flexShow');
  }
  window.addEventListener('click', function(e) {
    if (!e.target.matches('.navItems')) {
      if (navMenu.classList.contains('flexshow')) {
        navMenu.classList.remove('flexShow');
      }
    }
  });
}

// function removeMenu() {
//   window.addEventListener('click', function(e) {
//     if (!e.target.matches('navMenu') && navMenu.classList.contains('flexshow')) {
//         navMenu.classList.toggle('flexShow');
//       }
//   });
// }