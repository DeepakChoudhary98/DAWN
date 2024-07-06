const express = require("express");
const User = require("../models/User.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        console.log(req.body);
        const checkUser = await User.findOne({ username: req.body.username });

        if (!checkUser) {
            return res.status(401).json("You are not registered");
        }

        const actualPassword = CryptoJS.AES.decrypt(checkUser.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
        
        if (actualPassword !== req.body.password) {
            return res.status(401).json("Wrong credentials");
        }

        const accessToken = jwt.sign({
                id: checkUser._id,
                isAdmin: checkUser.isAdmin
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = checkUser._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
