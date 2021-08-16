// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

const iconMenu = document.querySelector(".icon-menu");

function toggleMenu(e) {
  e.preventDefault();
  let menu = document.querySelector(".res-nav");
  if (menu.className === "res-nav") {
    menu.className += " responsive";
  } else {
    menu.className = "res-nav";
  }
}

iconMenu.addEventListener("click", toggleMenu);
