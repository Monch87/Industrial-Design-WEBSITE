const express = require('express')
const router = express.Router()

const User = require('./../models/user.model')



router.get('/getAllCoasters', (req, res) => {

    Coaster
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coasters', err }))
})


router.get('/getOneCoaster/:coaster_id', (req, res) => {

    Coaster
        .findById(req.params.coaster_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coaster', err }))
})


router.post('/newCoaster', (req, res) => {

    Coaster
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving coasters', err }))
})


router.put('/editCoaster/:coaster_id', (req, res) => {

    Coaster
        .findByIdAndUpdate(req.params.coaster_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing coasters', err }))
})


module.exports = router