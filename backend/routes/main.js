const express = require('express');
const router = express.Router();

//get the list of all the students from the db
router.get('/students', (req, res) => {
    res.send({ type: "GET" });
})

// add a new student record to db
router.post('/students', (req, res) => {
    res.send({
        type: "POST",
        name: req.body.name,
        location: req.body.location
    });
})

// update a particular student in the db
router.put('/students/:id', (req, res) => {
    res.send({ type: "PUT" });
})

// Delete a student from the db
router.delete('/students/:id', (req, res) => {
    res.send({ type: "DELETE" });
})

module.exports = router;