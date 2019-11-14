

console.log("It's working");

window.onscroll = function() {scrollFunction()};

const headerName = document.getElementById('header-name');
const headerLogo = document.getElementById("header-logo");

function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
      // headerName.style.visibility = "hidden";
      headerName.style.display = "none";
      headerLogo.style.display = 'block';
      // headerLogo.style.visibility = "visible";
    } else {
      // headerName.style.visibility = "visible";
      headerName.style.display = "block";
      // headerLogo.style.visibility = "hidden";
      headerLogo.style.display = 'none';
    }
}
