const express = require("express");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");
const CryptoJS = require("crypto-js");
const Product = require("../models/Product.js");

const router = express.Router();

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const queryNew = req.query.new;
        const queryCategory = req.query.category;
        let products;
        if (queryNew) {
            products = await Product.find().sort({ _id: -1 }).limit(5);
        } else if (queryCategory) {
            products = await Product.find({ categories: { $in: [queryCategory] } });
        } else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
