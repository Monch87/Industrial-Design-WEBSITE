const express = require('express')
const router = express.Router()
const transporter = require('./../config/nodemailer.config')



router.put('/contact', (req, res) => {

    const { subject, name, email, message } = req.body
    console.log(name)
    
    transporter.sendMail({
        from: email,
        to: 'vamminfo@gmail.com',
        subject: 'Contact: ' + name + ' / Subject: ' + subject,
        text: message,
        html: `<b>${message}</b>`
    })
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error sending message', err }))
})

module.exports = router