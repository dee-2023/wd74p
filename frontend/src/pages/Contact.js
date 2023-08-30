
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './contact.css';
import React, { useState } from "react";


export const Contact = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    

    const handleSubmit = (e) => {   //every form needs handleSubmit
        e.preventDefault();        
        console.log(name);
    }
    return(
        <article className="Col mtop">
            <h1 className="text-center">We’d Love to Hear From You, Get In Touch With Us!</h1>
            <hr />
            <aside className="Col-md-3">
                <div id="contact-info-widget" className='asideright'>
                    <h6>Contact Info</h6><br /><br />
                    <p>Vacation Island</p>
                    <p>Phone: +63 909 123 4567</p>
                    <p>Mobile: +63 919 999 8888</p>
                    <p>Email: info@vacationisland.com</p>
                    <p>Web: www.vacationisland.com</p>
                </div>
            </aside>
            <section className="Col-md-9">
                <Form className="w-50" onSubmit={handleSubmit}>
                    <legend>Contact Us</legend>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label htmlFor="name">Name:</Form.Label>
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name(Required)" required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="lastName">
                            <Form.Label htmlFor="email">Email:</Form.Label>
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email(Required)" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label htmlFor="subject">Subject:</Form.Label>
                        <Form.Control value={subject} onChange={(e) => setSubject(e.target.value)} type="email" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label htmlFor="message">Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message here..." />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </section>
            <hr />
        </article>
       

            

    );
    }

    export default Contact;