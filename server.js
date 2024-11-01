const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

// express app
const app = express();

// apply Middleware
app.use(express.urlencoded({extended: false}));



app.set('view engine', "ejs");

app.use(express.json());





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});