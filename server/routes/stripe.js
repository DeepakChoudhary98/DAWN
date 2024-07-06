const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
    });

    res.status(200).json(paymentIntent);
  } catch (stripeErr) {
    console.log(stripeErr.message);
    res.status(500).json(stripeErr);
  }
});

module.exports = router;