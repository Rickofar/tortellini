// Function to handle the "Add to Cart" button click

function addBreakfast() {
	const button = document
		.querySelectorAll(".add-breakfast")
		.forEach((button) => {
			button.dataset;
			const breakfastItems = button.dataset.breakfast;

			console.log(breakfastItems);
		});
}

// function handleAddToCart(event) {
// 	const product = event.target.parentElement;
// 	const productName = product.querySelector("h3").textContent;
// 	const productPrice = product.querySelector("p").textContent;

// 	const cartItem = document.createElement("div");
// 	cartItem.textContent = `${productName} - ${productPrice}`;

// 	const cart = document.getElementById("cart");
// 	cart.appendChild(cartItem);
// }

// Add event listeners to "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll(".add-to-cart");
// addToCartButtons.forEach((button) => {
// 	button.addEventListener("click", handleAddToCart);
// });

// function addBreakfast() {
// 	document.querySelectorAll(".add-breakfast").forEach((button) => {
// 		button.addEventListener("click", () => {
// 			button.dataset;
// 			const breakfastImage = button.dataset.breakfastImage;
// 			const breakfastName = button.dataset.breakfastName;
// 			const breakfastPrice = button.dataset.breakfastPrice;

// 			console.log(breakfastName, breakfastImage, breakfastPrice);

// 			let matchingItem;

// 			cart.forEach((item) => {
// 				if (
// 					[
// 						breakfastName === item.breakfastName,
// 						breakfastImage === item.breakfastImage,
// 						breakfastPrice === item.breakfastPrice,
// 					]
// 				) {
// 					matchingItem = item;
// 				}
// 			});

// 			if (matchingItem > 0) {
// 				matchingItem.quantity += 1;
// 			} else {
// 				cart.push({
// 					breakfastImage: breakfastImage,
// 					breakfastName: breakfastName,
// 					breakfastPrice: breakfastPrice,
// 					quantity: 1,
// 				});
// 			}

// 			let cartQuantity = 0;

// 			cart.forEach((item) => {
// 				cartQuantity += item.quantity;
// 			});

// 			document.querySelector(".cart-quantity").innerHTML = cartQuantity;
// 			document.querySelector(
// 				"#cart"
// 			).innerHTML += `${breakfastName} ${breakfastImage} ${breakfastPrice}`;
// 		});
// 	});
// }
function updateClock() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");
	const date = now.toDateString();

	const clockElement = document.getElementById("clock");
	clockElement.textContent = `${hours}:${minutes}:${seconds} ${date}`;
}

setInterval(updateClock, 1000);
