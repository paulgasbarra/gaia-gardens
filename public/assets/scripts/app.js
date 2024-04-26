window.onload = (event) => {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    if (
      item.children.item(0).getAttribute("href").split("/")[1] ===
      window.location.pathname.split("/")[1]
    ) {
      item.children.item(1).style.width = "100%";
    } else {
      item.children.item(1).style.width = "0%";
    }
  });
};

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
