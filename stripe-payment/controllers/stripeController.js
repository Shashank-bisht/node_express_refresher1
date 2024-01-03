const stripe = require('stripe')(process.env.STRIPE);

const stripeController = async (req, res) => {
  const { total_amount, shipping_fee } = req.body;

  const calculateOrderAmount = () => {
    return total_amount + shipping_fee;
  };

  const customerName = "Jenny Rosen"; // Replace with actual customer name
  const customerAddress = "delhi, IN"; // Replace with actual customer address and country code

  // Corrected customer and shipping parameters
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: "usd",
    description: "Your payment description", // Add a description
  });

  console.log(paymentIntent);
  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripeController;
