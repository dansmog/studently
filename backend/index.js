const express = require('express');

//setup express app
const app = express();

app.get('/api/v1', (req, res) => {
    console.log('Get request');
    res.send({ name: "Daniel Anthony Juwon " });
})

//listen for requests
app.listen(process.env.port || 4000, () => {
    console.log("now listening for requests");
})