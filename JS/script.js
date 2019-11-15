

console.log("It's working");

const headerName = document.getElementById('header-name');
const headerLogo = document.getElementById("header-logo");
const navDark = document.querySelector('.navbar-dark');
const navBar = document.querySelector('.navbar'); 

const windowWidth = window.matchMedia("(min-width: 768px)");
console.log(windowWidth);

if (windowWidth.matches) {
  window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
    // scroll has passed 450px -> hide wordmark, show circle logo
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        // headerName.style.display = "none";
        // headerLogo.style.display = 'block';
        navBar.style.height = '110px'
        navDark.classList.add('navbar-expand-md');
    } else {
      // scroll has NOT passed 450px -> show wordmark, hide circle logo
      // headerName.style.display = "block";
      // headerLogo.style.display = 'none';
      navDark.classList.remove('navbar-expand-md');
    }
}
