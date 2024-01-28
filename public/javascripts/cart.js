const express = require('express');
const router = express.Router();

// Hardcoded cart items data
const cartItemsData = [
  { id: 1, name: 'PlayStation 5', description: 'Description 1', price: 10, image: '/images/ps5.jpg' },
  { id: 2, name: 'Raspberry Pi', description: 'Description 2', price: 20, image: '/images/series1.jpg' }
  // ... more items
];

// Route to display the cart page
router.get('/cart', (req, res) => {
  res.render('cart', { cartItems: cartItemsData });
});

// Route to display the checkout page
router.get('/checkout', (req, res) => {
    // You might want to pass additional data to your checkout page
    res.render('checkout', { cartItems: cartItemsData });
  });
  

module.exports = router;
