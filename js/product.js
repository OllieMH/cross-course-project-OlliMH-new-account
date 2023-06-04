const btn = document.querySelector("#addtocart");
const icon = document.querySelector("#carticon");

function addToCart() {
	btn.classList.add("clickedaddcart");
	btn.innerHTML = "Added to cart";
	icon.classList.remove("fa-cart-shopping");
	icon.classList.add("fa-cart-plus");
}

btn.addEventListener("click", addToCart);
