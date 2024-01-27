const router = require('express').Router();
const User = require('../models/User');

//REGISTER
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, userId, checkTerms } = req.body;
    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        userId: userId,
        checkTerms: checkTerms
    });
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});


//LOGIN (fetch data)
router.post('/login', async (req, res) => {
    const { userId } = req.body;
    const user = await User.findOne({
        userId: userId
    })
    res.json({ userData: { user } })
})



module.exports = router;