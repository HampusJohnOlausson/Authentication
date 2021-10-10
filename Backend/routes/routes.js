const router = require('express').Router()
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { findIndex } = require('cypress/types/lodash');
const { findOne } = require('../models/user');
const { resolveSoa } = require('dns');

router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    })

    const result = await user.save()
    const { password, ...data } = await result.toJSON();
    res.send(data);
})


router.post('/login', (req, res) => {

    const user = await findOne({email: req.body.email});

    if(!user) {
        return new res.status(404).send({
            message: 'User not found'
        })
    }

    if(await bcrypt.compare(req.body.password, user.password)){
        return new res.status(400).send({
            message: 'Invalid credentials'
        })
    }

    res.send(user);
})

module.exports = router;