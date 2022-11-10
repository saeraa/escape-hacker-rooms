const menuEl = document.querySelector("nav");
const menuBtnOpenEl = document.querySelector(".btn-menu");
const menuBtnCloseEl = document.querySelector(".btn-menu-close");

menuBtnOpenEl.addEventListener("click", openMenu);
menuBtnCloseEl.addEventListener("click", closeMenu);

function openMenu() {
	document.body.style.overflowY = "hidden";
	menuEl.style.display = "grid";
}

function closeMenu() {
	document.body.style.overflowY = "auto";
	menuEl.style.display = "none";
}
