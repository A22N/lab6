const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb+srv://an:2zqZuLoq1SfIQckx@cluster0.ndout2e.mongodb.net/", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

app.use(foodRouter);

app.listen(3000, () => {
    console.log("Server is running...");
});