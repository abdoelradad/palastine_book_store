/* profile menu remove */
const profileLink = document.querySelector(".profile");
const profileMenu = document.querySelector(".profile__menu");
const exit = document.querySelector(".menu__exit");

profileLink.addEventListener("click", () => {
  profileMenu.classList.add("show-menu");
});

exit.addEventListener("click", () => {
  profileMenu.classList.remove("show-menu");
});
