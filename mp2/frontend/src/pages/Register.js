import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const handleLoginClick = () => {
        navigate('/login');
    }

    return (
    <Container>
        
        <Form onSubmit={handleSubmit} className="justify-content-end">
            <Form.Label>Full name</Form.Label>
            <Form.Control name="fullname" id="fullname" placeholder="fullname" />
            <Form.Label> Email address</Form.Label>
            <Form.Control type="email" placeholder="your@email.com" />
            <Form.Label>Username</Form.Label>
            <Form.Control htmlFor="username" name="username" id="username" placeholder="create username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Form.Label htmlFor="password" name="password" id="password" placeholder="create password">Create Password</Form.Label>
            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form>
            <p>Already have an account?</p>
            <Button variant="success" onClick={handleLoginClick}>Login</Button>
            
    </Container>   
    );


};
export default Register;