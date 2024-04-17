function loadPage(page) {
  const contentDiv = document.getElementById("content");
  fetch(`pages/${page}.html`)
    .then((response) => response.text())
    .then((html) => {
      contentDiv.innerHTML = html;
    })
    .catch((err) => {
      contentDiv.innerHTML = "<p>Error loading the page.</p>";
      console.error("Error loading the page:", err);
    });
  setSelectedNav(page);
}

function setSelectedNav(page) {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    if (item.id === page) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header");
  var mainContent = document.getElementById("main");
  mainContent.style.paddingTop = header.offsetHeight + "px";
});

window.onload = () => loadPage("home");
