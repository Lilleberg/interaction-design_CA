const cartButton = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart-container");

cartButton.onclick = function () {
  if (cartContainer.style.display === "block") {
    cartContainer.style.display = "none";
  } else {
    cartContainer.style.display = "block";
  }
}

