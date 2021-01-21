const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IBuh2KE6PWzg82aMzkWI4RkFxo9wEL2YXr6nYT4vBiNlKxVWckS5L2BGRM97kj9NAJYwDdVe5jwT3ALb56RcgZ5001D4U4K5P"
    );

// API

// App セッティング
const app = express();

// ミドルウェア
app.use(cors({ origin: true }));
app.use(express.json()); 

// API ルート
app.get('/', (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved!  for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        currency: "jpy",
   });

   response.status(201).send({
    clientSecret: paymentIntent.client_secret, 

   })
})

// Listen コマンド
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-ef7f9/us-central1/api