const express = require('express');
const router = express.Router();
const Student = require('../models/student');

//get the list of all the students from the db
router.get('/students', (req, res, next) => {
    res.send({ type: "GET" });
})

// add a new student record to db
router.post('/students', (req, res, next) => {
    Student.create(req.body).then((student) => {
        res.send(student);
    }).catch(next);
})

// update a particular student in the db
router.put('/students/:id', (req, res, next) => {
    res.send({ type: "PUT" });
})

// Delete a student from the db
router.delete('/students/:id', (req, res, next) => {
    Student.findByIdAndRemove({ _id: req.params.id }).then((student) => {
        res.send(student);
    })
})

module.exports = router;