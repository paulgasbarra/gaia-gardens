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
}

window.onload = () => loadPage("home");
