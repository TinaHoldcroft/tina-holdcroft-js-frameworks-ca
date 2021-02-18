import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Helmet } from "react-helmet";

const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name is required')
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
        <>
            <Helmet><title>Contact | VGD</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" name="name" placeholder="Enter your name" ref={register}/>
                    <i title="name" className="fas fa-user"></i>
                    <p className="error">{errors.name?.message}</p>
                </div>

                <div>
                    <input type="email" name="email" placeholder="Enter your e-mail" ref={register}/>
                    <i className="fas fa-envelope"></i>
                    <p className="error">{errors.email?.message}</p>
                </div>

                <div>
                    <textarea type="text" name="message" placeholder="Enter your message" ref={register}/>
                    <i className="fas fa-quote-right"></i>
                    <p className="error">{errors.message?.message}</p>
                </div>

                <div className="button-wrapper">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Contact;