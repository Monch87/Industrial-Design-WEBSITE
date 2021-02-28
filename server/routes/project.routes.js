const express = require('express')
const router = express.Router()

const Project = require('./../models/project.model')

// => res.json({ message: 'hola' }))

router.get('/allProjects', (req, res) => { 

    Project
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching projects', err }))
})


router.get('/oneProject/:project_id', (req, res) => {
  
    Project
        .findById(req.params.project_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching projects', err }))
})


router.post('/newProject', (req, res) => {

    Project
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving projects', err }))
})


router.put('/editProject/:project_id', (req, res) => {

    Project
        .findByIdAndUpdate(req.params.project_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing projects', err }))
})


module.exports = router