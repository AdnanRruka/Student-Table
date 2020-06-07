const Students = require('../models/student.model')


get = (req, res, next) => {
    let find = {}
    if (req.query.Type) {
        find = { name: req.query.name }
    }
    Students.find(find).then((student) => {
        return res.send(student);
    }).catch((error) => next(error))
}


post = (req, res, next) => {
    console.log(req.body)
    const student = new Students({
        name: req.body.name,
        email: req.body.email,
        address: {
            city: req.body.address.city,
            street: req.body.address.street,
            zipcode: req.body.address.zipcode
        }
    })
    try {
        const newListing = student.save()
        res.status(201).send(newListing)
    }
    catch (err) {
        next(err)
    }
}

deleteStudent = (req, res, next) => {
    Students.findOneAndRemove({ _id: req.params.id }, (err) => {
    })
}


module.exports = {
    get,
    post,
    deleteStudent,

}