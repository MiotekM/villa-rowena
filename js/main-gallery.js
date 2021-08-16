var myGallery = new FgGallery(".fg-gallery", {
  cols: 2,
  style: {
    border: "10px solid #fff",
    width: "46%",
    height: "400px",
    boxShadow: "0 2px 10px -5px #000",
  },
});

const mapmenu = document.getElementById("map");
const subGalleries = document.querySelectorAll(".sub-gallery");
const galleryMap = document.querySelector(".gallery-map");
mapmenu.addEventListener("click", function (e) {
  const clicked = e.target.closest(".point");
  // Guard clause
  if (!clicked) return;
  subGalleries.forEach((item) => item.classList.remove("show"));
  document.querySelector(`.sub--${clicked.dataset.tab}`).classList.add("show");
  galleryMap.scrollIntoView({ behavior: "smooth" });
});
