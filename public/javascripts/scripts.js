document.addEventListener('DOMContentLoaded', function () {
    // Event listener for Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart'); // Use a more specific selector

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            // Get the product details from the product item
            const productItem = event.target.closest('.product-item');
            if (!productItem) {
                console.error('Product item not found!');
                return;
            }
            const productName = productItem.querySelector('h3')?.textContent;
            const productPrice = productItem.querySelector('.product-price')?.textContent; // Use a specific class for price
            
            // Call the function to handle adding the item to the cart
            if (productName && productPrice) {
                addToCart(productName, productPrice);
            } else {
                console.error('Product name or price not found!');
            }
        });
    });
});

function addToCart(productName, productPrice) {
    // Placeholder for adding the product to the cart
    // In a real application, you would likely make an API call or update the DOM directly
    console.log(`Added ${productName} with price ${productPrice} to the cart.`);
    
    // You can add more functionality here to actually update the cart
}
