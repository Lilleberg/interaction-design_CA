const cartButton = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart-container");
const addToCart = document.querySelectorAll(".add-to-cart");
const cartItems = document.querySelector(".cart");

let games = [];
let gameObject = {};

cartButton.onclick = function () {
  if (cartContainer.style.display === "block") {
    cartContainer.style.display = "none";
  } else {
    cartContainer.style.display = "block";
  }
}

addToCart.forEach(function (button) {
  button.addEventListener("click", function () {

    if (!games.length === 0) {
      document.querySelector(".empty").style.display = "none";
    } else {
      document.querySelector(".empty").style.display = "block";
    }
    cartContainer.style.display = "block";


    const price = event.target.dataset.price;
    console.log(price);
    let gameAdded = event.target.dataset.game;
    games.push(gameAdded);
    games.push(price);
    console.log(games);
    for (let i = 0; i < games.length; i++) {
      cartItems.innerHTML += `${games[i]}`;
    }

  })
});
/*for (let i = 0; i < games.length; i++) {
  cartContainer.style.display = "block";
  document.querySelector(".empty").style.display = "none";
  console.log(gameAdded);
  addGameList.innerHTML += `${gameAdded}`;
}
}*/

/*gameProducts.forEach(function (product) {
  product.addEventListener("click", function () {
    cartContainer.style.display = "block";
    let gameAdded = event.target.dataset.game;
    addGameList.innerHTML += `<li>${gameAdded}</li>`;
  })
});*/