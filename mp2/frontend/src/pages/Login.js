import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            const data = response.data;

            if (data.success) {
                localStorage.setItem('token', data.token);
                setMessage(`Welcome, ${data.user.username}!`);
                localStorage.setItem('isLog' , 'true');
                navigate('/dashboard');
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container className='App-login'>
            <Card className='form-container mtop'>
            <h2>Login</h2>
            <p className='red'>{message}</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="username"
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                        type="password" 
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
            </Card>
        </Container>
    );
};

export default LoginForm;



