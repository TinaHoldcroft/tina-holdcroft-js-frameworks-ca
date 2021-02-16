import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Heading from "../layout/Heading";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, 'Name must contain at least 2 characters')
        .matches(/[a-zA-z-\s]/g, 'Only characters A-Z are valid')
        .required(),
    lastName: yup
        .string()
        .min(2, 'Name must contain at least 2 characters')
        .matches(/[a-zA-z-\s]/g, 'Only characters A-Z are valid')
        .required(),
    email: yup
        .string()
        .email('E-mail is not valid', { regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g })
        .required('E-mail is required'),
    message: yup
        .string()
        .min(10, 'Message is required')
        .required(),
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
    function onSubmit(data) {
        console.log("data", data)
        alert('Your form has been submitted');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Heading title="Contact"/>

                <label>First Name</label>
                <input type="text" name="firstName" placeholder="Enter your first name" ref={register}/>
                <p className="error">{errors.firstName?.message}</p>

                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Enter your last name" ref={register}/>
                <p className="error">{errors.lastName?.message}</p>

                <label>E-mail</label>
                <input type="email" name="email" placeholder="Enter your email" ref={register}/>
                <p className="error">{errors.email?.message}</p>

                <label>Message</label>
                <input type="message" name="message" placeholder="Enter your message" ref={register}/>
                <p className="error">{errors.message?.message}</p>
                
                <button type="submit">Submit</button>
        </form>
    );
}

export default Contact;