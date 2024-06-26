// Get data from local storage adn display it in the cart
if (localStorage.getItem("image") == null) {
  window.location.href = "index.html";
}

var divChangeImage = document
  .getElementById("product")
  .getElementsByTagName("img")[0];
divChangeImage.src = localStorage.getItem("image");
var divChangeTitle = document
  .getElementById("product")
  .getElementsByTagName("h2")[0];
divChangeTitle.textContent = localStorage.getItem("title");

var divChangeDesc = document
  .getElementById("product")
  .getElementsByTagName("h4")[0];

divChangeDesc.textContent = localStorage.getItem("desc").split("/")[0];

var divChangeSpan = document
  .getElementById("product")
  .getElementsByTagName("span")[1];

divChangeSpan.textContent = localStorage.getItem("span");

document.addEventListener("DOMContentLoaded", function () {
  var proQty = document.querySelectorAll(".pro-qty");

  proQty.forEach(function (element) {
    element.innerHTML += '<div class="dec qty-btn">-</div>';
    element.innerHTML += '<div class="inc qty-btn">+</div>';
  });

  var qtyBtns = document.querySelectorAll(".qty-btn");

  qtyBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var button = this;
      var parent = button.parentNode;
      var oldValue = parseFloat(parent.querySelector("input").value);

      if (button.classList.contains("inc")) {
        var newVal = oldValue + 1;
      } else {
        if (oldValue > 1) {
          var newVal = oldValue - 1;
        } else {
          newVal = 1;
        }
      }

      parent.querySelector("input").value = newVal;
    });
  });
});
function addToCart() {
  var product = {
    title: localStorage.getItem("title"),
    desc: localStorage.getItem("desc"),
    span: localStorage.getItem("span"),
    qty: document.querySelector(".pro-qty input").value,
  };

  alert(
    "Add to cart successfully!\n" +
      localStorage.getItem("title") +
      " " +
      product.qty +
      " items \n" +
      "We will contact you soon!"
  );
  localStorage.removeItem("image");
  localStorage.removeItem("title");
  localStorage.removeItem("desc");
  localStorage.removeItem("span");
  window.location.href = "index.html";
}
