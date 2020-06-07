import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const StudentComponent = (props) => {
    let history = useHistory()
    const [students, setStudents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/students/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setStudents(data)
            });
        console.log(students)
    }, [])


    const deleteOne = (student) => {

        const url = "http://localhost:5000/students/" + student._id
        const otherParams = {
            method: "DELETE",
        }
        console.log(student._id)
        fetch(url, otherParams)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => console.log(error))

    }
    return (
        <div>
            {students.map((student, index) => {
                return (
                    <>
                        <h5 key={index}>Name: {student.name}</h5>
                        <h5 key={index}>Email: {student.email}</h5>
                        <h5 key={index}>City: {student.address.city}</h5>
                        <h5 key={index}>Street: {student.address.street}</h5>
                        <h5 key={index}>Zipcode: {student.address.zipcode}</h5>
                        <button onClick={() => deleteOne(student)} className="btn btn-danger">Delete me</button>
                    </>
                )
            }
            )}
        </div>
    );
};

export default StudentComponent;
