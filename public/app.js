window.onload = (event) => {
  console.log("page is fully loaded");
};

document.addEventListener("click", function (event) {
  console.log("click", event.target);
});

document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".parallax");
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const topPos = section.offsetTop;
    const height = section.offsetHeight;
    const isActive =
      scrollPosition >= topPos - window.innerHeight &&
      scrollPosition < topPos + height;

    if (isActive) {
      section.style.opacity = 1;
    } else {
      section.style.opacity = 0;
    }
  });
});
