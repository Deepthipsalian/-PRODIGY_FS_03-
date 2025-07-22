const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', async (req, res) => res.json(await Product.create(req.body)));
router.get('/', async (req, res) => res.json(await Product.find()));

module.exports = router;
