const cartItems = JSON.parse(localStorage.getItem("cart"));
const gameInfo = document.querySelector(".info");
const costInfo = document.querySelector(".cost-info");

let sumItems = 0;

cartItems.forEach(function (item) {
  sumItems += parseInt(item.price);

  gameInfo.innerHTML +=
    `<div class="info-line">
      <p>Item</p>
      <p>Qty</p>
      <p>Cost</p>
    </div>
    <div class="game">
      <p>${item.name}</p>
      <p>1</p>
      <p>${item.price},-</p>
    </div>`;
});

let sumTotal = sumItems + 29;

costInfo.innerHTML +=
  `<div>
    <p>Item(s)</p>
    <p>${sumItems},-</p>
  </div>
  <div>
    <p>Shipping</p>
    <p>29,-</p>
  </div>
  <div class="total">
    <p>Total</p>
    <p>${sumTotal},-</p>
  </div>`;