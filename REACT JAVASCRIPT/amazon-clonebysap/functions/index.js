const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KRamoSF981y29PCrHByHwWfZ8BH8bMP9ba6B8R7DRM4xxwwWsvsdSECE5MSON7dwggFX3QsA0dAYRfT4ANW59bZ009IhZPEwO")

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello sap"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received BOOM!!! for this amount >>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    });

    // OK - created something
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// Listen
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clonesap/us-central1/api