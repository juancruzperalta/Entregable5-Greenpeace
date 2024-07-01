const $buttonHamburgues = document.querySelector(".hamburg-nav");
const $navLi = document.querySelector(".nav-li");
$buttonHamburgues.addEventListener("click", (e) => {
  $navLi.classList.contains("activeHamburgues")
    ? $navLi.classList.remove("activeHamburgues")
    : $navLi.classList.add("activeHamburgues");
});

// Login-----
const deslogueo = document.querySelector("#deslogear");
document.addEventListener("DOMContentLoaded", () => {
  // Recuperar información del usuario desde Local Storage
  const usuarioLogeado = JSON.parse(localStorage.getItem("userLogeado"));

  if (usuarioLogeado) {
    adminView.style.display = "flex";
  } else {
    adminView.style.display = "none";
    adminOpen.style.display = "none";
  }
});
deslogueo.addEventListener("click", () => {
  localStorage.clear();
  adminView.style.display = "none";
  adminOpen.style.display = "none";
});
const adminView = document.querySelector(".administrator");
const adminOpen = document.querySelector(".adminOpen");
adminView.addEventListener("click", (e) => {
  if (adminOpen.style.display === "none") {
    adminOpen.style.display = "flex";
  } else {
    adminOpen.style.display = "none";
  }
});
// Login-----
