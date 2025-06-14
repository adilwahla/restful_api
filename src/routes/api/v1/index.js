const express = require('express');
const router = express.Router();
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;