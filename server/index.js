const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 1337;

app.use(cors());
app.use(express.json());

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB connected successfully'))
    .catch(err => {
        console.log(err)
    });


app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});





app.listen(port, () => {
    console.log('Server is running on port', port)
});