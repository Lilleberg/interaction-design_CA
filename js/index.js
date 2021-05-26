const cartButton = document.querySelector(".cart-button");
const cartContainer = document.querySelector(".cart-container");

cartButton.onclick = function () {
  cartContainer.style.display = "block";
}