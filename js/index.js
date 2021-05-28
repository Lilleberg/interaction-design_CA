const cartIcon = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart-container");
const addToCartButton = document.querySelectorAll(".add-to-cart");
const cart = document.querySelector(".cart");

let singleGameObj = {};
let gameArr = [];

cartIcon.onclick = function () {
  if (cartContainer.style.display === "block") {
    cartContainer.style.display = "none";
  } else {
    cartContainer.style.display = "block";
  }
}

addToCartButton.forEach(function (button) {
  button.addEventListener("click", function (event) {

    cartContainer.style.display = "block";

    const gameName = event.target.dataset.game;
    const gameCost = event.target.dataset.cost;
    const price = parseInt(gameCost);

    /*gameArr = [
      {
        name: gameName,
        price: gameCost,
      }
    ];*/

    singleGameObj = {
      name: gameName,
      price: gameCost,
    };

    gameArr.push(singleGameObj);
    console.log(gameArr);

    cart.innerHTML = "";
    let total = 0;
    const totalSum = document.querySelector(".total-sum");

    for (let i = 0; i < gameArr.length; i++) {

      total = total + JSON.stringify(gameArr[i].price);
      console.log(total);

      cart.innerHTML +=
        `<div class="cart-item">
        <div><img src="../images/cod.jpg" alt="CoD: Black Ops product image" style="max-width: 80px";></div>
        <div class="cart-name-price">
          <p class="game-in-cart-name">${gameArr[i].name}</p>
          <p class="game-in-cart-price">${gameArr[i].price},-
        </div>
      <div>`;
      totalSum.innerHTML = `<p class="total-price">Sum:</p><p>${total},-</p>`;

    }

  })
});

/*function showCart(cartItems) {


  cartItems.forEach(function () {
    total += price;
    cart.innerHTML +=
      `<div class="cart-item">
        <div><img src="../images/cod.jpg" alt="CoD: Black Ops product image" style="max-width: 80px";></div>
        <div class="cart-name-price">
          <p class="game-in-cart-name">${gameName}</p>
          <p class="game-in-cart-price">${price},-
        </div>
      <div>`;
    totalSum.innerHTML = `<p class="total-price">Sum:</p><p>${total},-</p>`;
  });
};*/