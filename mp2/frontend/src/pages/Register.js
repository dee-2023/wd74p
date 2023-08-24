import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Full name</Form.Label>
            <input name="fullname" id="fullname" placeholder="fullname" />
            <Form.Label htmlFor="email"> Email address</Form.Label>
            <input type="email" placeholder="your@email.com"></input>
            <Form.Label>Username</Form.Label>
            <input htmlFor="username" name="username" id="username" placeholder="create username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Form.Label htmlFor="password" name="password" id="password" placeholder="create password"></Form.Label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form>
            <p>Already have an account</p>
            <Button variant="success" onClick={() => navigate('/login')}  >Login</Button>
    </Container>   
    );


};
export default Register;