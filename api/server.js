const express = require('express');
const mongoose = require('mongoose');
require('./db/db')
const routes = require("./routes")
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000;

app.use(morgan('tiny'))
app.use(express.json())

app.use(cors())
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})