const mongoose = require('mongoose');

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/homenet"
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded Mr Adnan.') }
    else { console.log(`Error in DB connection :  ${err}`) }
});

require('../models/student.model');

