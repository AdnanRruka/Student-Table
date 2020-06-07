import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import style from './auth.module.css'

const FormComponent = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: {
            city: '',
            street: '',
            zipcode: ''

        }
    });
    // const history = useHistory();

    const { name, email } = formData;
    const onChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value, address: {
                ...formData.address,
                [e.target.name]: e.target.value,
            },
        });

    }


    const onSubmit = async (e) => {
        // e.preventDefault()
        const url = "http://localhost:5000/students"
        const otherParams = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },

            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                address: {
                    city: formData.address.city,
                    street: formData.address.street,
                    zipcode: formData.address.zipcode
                }
            })

        }

        fetch(url, otherParams)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => console.log(error))

    };




    return (
        <Fragment>
            <div>
                <h1 className="large text-primary">Create Your Account</h1>
                <p className="lead">

                </p>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="City"
                            name="city"
                            value={formData.address.city}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Street"
                            name="street"
                            value={formData.address.street}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Zipcode"
                            name="zipcode"
                            value={formData.address.zipcode}
                            onChange={onChange}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
            </div>
        </Fragment>
    );
};

export default FormComponent;
