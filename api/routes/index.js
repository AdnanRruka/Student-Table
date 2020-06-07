const express = require('express')
const router = express.Router()

const students = require('./StudentsRoute')

router.get("/students", students.get)
router.post("/students", students.post)
router.delete('/students/:id', students.deleteStudent)


module.exports = router