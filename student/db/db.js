const mongoose = require('mongoose');

const URI = "mongodb+srv://adnan123:adnan123@cluster0-ljwhn.mongodb.net/Student?retryWrites=true&w=majority"

mongoose.connect(URI, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded Mr Adnan.') }
    else { console.log(`Error in DB connection :  ${err}`) }
});

require('./register.model');

