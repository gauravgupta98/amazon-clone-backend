import express from "express";
import cors from "cors";
const stripe = require("stripe")(
  "sk_test_51ItpgLSDXMsfyylsVd40cYscedtTJ2dzOWjav4B6H27zuhRjVy5kdkArjqAE98WOyl1DJcgLXaV2WbAFd4kofV5M00CPhYQbTd"
);

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (_request, response) =>
  response.status(200).send("Server is up and running!")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});
