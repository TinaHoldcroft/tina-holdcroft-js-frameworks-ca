import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
  
    function onSubmit(data) {
        console.log("data", data);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" placeholder="Enter your first name" ref={register} />
            <p className="error">{errors.firstName?.message}</p>
        </Form.Group>
        <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Enter your last name" ref={register} />
            <p className="error">{errors.lastName?.message}</p>
        </Form.Group>
        <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control name="email" placeholder="Enter your email" ref={register} />
            <p className="error">{errors.email?.message}</p>
        </Form.Group>
        <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control type="message" name="message" placeholder="Enter your message" ref={register} />
            <p className="error">{errors.message?.message}</p>
        </Form.Group>

        <Button type="submit">Submit</Button>
    </form>
  );
}
export default Contact;