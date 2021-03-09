const express = require('express')
const router = express.Router()
const Project = require('./../models/project.model')
const User = require('./../models/user.model')

router.get('/allProjects', (req, res) => {

    Project
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching projects', err }))
})


router.get('/byOwner/:id', (req, res) => {

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

    const project = { ...req.body, owner: req.user._id }

    Project
        .create(project)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving projects', err }))
})

router.put('/editProject/:project_id', (req, res) => {

    Project
        .findByIdAndUpdate(req.params.project_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing projects', err }))
})


router.delete('/deleteProject/:project_id', (req, res) => {

    const project_id = req.params.project_id

    Project
        .findByIdAndDelete(project_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting projects', err }))
})


router.get('/allCustomers', (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching users', err }))
})




module.exports = router