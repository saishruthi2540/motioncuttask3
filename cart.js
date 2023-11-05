document.addEventListener("DOMContentLoaded", function () {
    const cart = [];

    function updateCartDisplay() {
        const cartItems = document.querySelector(".cart-items");
        const totalPrice = document.querySelector(".total");

        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.innerText = `Total: $${total.toFixed(2)}`;
    }
    const buyButton = document.querySelector(".buy-button");

    

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", function () {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));

            cart.push({ name, price });
            updateCartDisplay();
        });
    });
});
// Add a click event listener to the "Buy" button
buyButton.addEventListener("click", function () {
    alert("Thank you for your purchase!");
});