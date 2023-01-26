const imageBtn = document.getElementById("img-btn");
const dropdown = document.getElementById("dropdown");
let isMenuOpen = false;

imageBtn.addEventListener("click", (e) => {
  if (isMenuOpen) {
    isMenuOpen = false;
    dropdown.classList.add("display-none");
    imageBtn.src = "./img/menu.svg";
  } else {
    isMenuOpen = true;
    dropdown.classList.remove("display-none");
    imageBtn.src = "./img/x.svg";
  }
});
