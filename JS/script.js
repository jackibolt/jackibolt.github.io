

console.log("It's working");

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById('header-name').style.display = "none";
      document.getElementById("header-logo").style.display = "block";
    } else {
      document.getElementById('header-name').style.display = "block";
      document.getElementById('header-logo').style.display = "none";
    }
}