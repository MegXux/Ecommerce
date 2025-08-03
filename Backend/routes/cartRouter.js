const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware')


router.post('/addtocart', authMiddleware,cartController.addToCart)
router.get('/getcart', authMiddleware,cartController.getCart)
router.post('/removefromcart', authMiddleware, cartController.removeFromCart)


module.exports = router;