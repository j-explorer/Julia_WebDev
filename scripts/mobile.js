const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar3 = document.getElementById('bar3');

//Menu is clicked to be opened and closed, whilst styling menu icon.
function exitMenuIcon() {
  bar1.style.transform = "rotate(45deg) translate(0px, 0px)";
  bar1.style.transition= "0.4s";
  bar3.style.transform = "rotate(-45deg) translate(-5px, 5px)";
  bar3.style.transition= "0.4s";
  }

  function resetMenuIcon() {
  bar1.style.transform = "";
  bar3.style.transform = "";
  }

document.addEventListener('DOMContentLoaded', function() {

menuIcon.addEventListener('click', toggleMenu);
function toggleMenu() {

  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
    exitMenuIcon();
  } else {
    mobileMenu.style.display = "none";
    resetMenuIcon();
  }

}

});
