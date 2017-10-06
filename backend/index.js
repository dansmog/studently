const express = require('express');
const routes = require('./routes/main');

//setup express app
const app = express();

app.use('/api/v1', routes)

//listen for requests
app.listen(process.env.port || 4000, () => {
    console.log("now listening for requests");
})