// const textElement = document.querySelector(".text");
// const textElements = document.querySelectorAll(".text");
// console.log(textElement);
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(textElement);

const observerCallback = (entries, observer, header) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("text");
      entry.target.classList.add("show-text");
    }
  });
};

const obsOptions = {
  root: null,
  threshold: 0.3,
};

document.querySelectorAll(".text").forEach((i) => {
  if (i) {
    const observer = new IntersectionObserver((entries) => {
      observerCallback(entries, observer, i);
    }, obsOptions);
    observer.observe(i);
  }
});
