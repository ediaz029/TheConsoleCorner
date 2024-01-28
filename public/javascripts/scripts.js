document.addEventListener('DOMContentLoaded', function () {
    // Event listener for Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            // Get the product details from the product item
            const productItem = event.target.closest('.product-item');
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = productItem.querySelector('p').textContent;
            
            // Call the function to handle adding the item to the cart
            addToCart(productName, productPrice);
        });
    });
});

function addToCart(productName, productPrice) {
    // Placeholder for adding the product to the cart
    // In a real application, you would likely make an API call or update the DOM directly
    console.log(`Added ${productName} with price ${productPrice} to the cart.`);
    
    // You can add more functionality here to actually update the cart
}
