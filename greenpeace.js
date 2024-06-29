const $buttonHamburgues = document.querySelector(".hamburg-nav ");
const $navLi = document.querySelector(".nav-li");
$buttonHamburgues.addEventListener("click", (e) => {
  $navLi.classList.contains("activeHamburgues")
    ? $navLi.classList.remove("activeHamburgues")
    : $navLi.classList.add("activeHamburgues");
});
