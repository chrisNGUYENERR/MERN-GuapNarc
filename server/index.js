const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 1337;
const cors = require('cors');
// const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

app.use(cors());
app.use(express.json());
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB connected successfully'))
    .catch(err => {
        console.log(err)
    });


// app.get('/', (req, res) => {
//     res.send('Welcome to my server!');
// });


app.use('/api/auth', authRoute);





app.listen(port, () => {
    console.log('Server is running on port', port)
});