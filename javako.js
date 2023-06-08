function addToCart(productName, productPrice) {

  sessionStorage.setItem('productName', productName);
  sessionStorage.setItem('productPrice', productPrice);

  window.location.href = 'checkout.html';
}

var productName = sessionStorage.getItem('productName');
var productPrice = parseFloat(sessionStorage.getItem('productPrice'));

if (productName && productPrice) {
  document.getElementById('product').value = productName;
  document.getElementById('price').value = '$' + productPrice.toFixed(2);
  document.getElementById('total').value = '$' + productPrice.toFixed(2);
}

function placeOrder() {
  const confirmation = confirm("Are you sure you want to place the order?");
  if (confirmation) {
    alert("Your order has been placed successfully!");
	
  } else {
    alert("Order cancelled.");
  }
}