if (window.screen.width > 740) {
  var myGallery = new FgGallery(".fg-gallery", {
    cols: 2,
    style: {
      border: "10px solid #fff",
      width: "49%",
      height: "400px",
      boxShadow: "0 2px 10px -5px #000",
    },
  });
}
// if (window.screen.width < 710) {
//   var myGallery = new FgGallery(".fg-gallery", {
//     cols: 1,
//     style: {
//       border: "10px solid #fff",
//       width: "100%",
//       height: "300px",
//       boxShadow: "0 2px 10px -5px #000",
//     },
//   });
// }
// if (window.screen.width < 501) {
//   var myGallery = new FgGallery(".fg-gallery", {
//     cols: 1,
//     style: {
//       border: "none",
//       width: "100%",
//       height: "300px",
//       boxShadow: "0 2px 10px -5px #000",
//     },
//   });
// }

const subGalleries = document.querySelectorAll(".sub-gallery");
const galleryType = document.querySelector(".gallery-panel");

galleryType.addEventListener("click", function (e) {
  const clicked = e.target.closest(".panel-btn");
  // Guard clause
  if (!clicked) return;
  subGalleries.forEach((item) => item.classList.remove("show"));
  document.querySelector(`.sub--${clicked.dataset.tab}`).classList.add("show");
});
