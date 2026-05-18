const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("Hello from Node API Updated");
});

mongoose.connect('mongodb+srv://seogoes2:rladbfla98!@example.mprxpxu.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => { 
        console.log('Connected to Database!');

    })
    .catch(() => { 
        console.log("Connection Failed!"); 
    });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});