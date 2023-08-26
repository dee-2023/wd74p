import './login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
//import { Container, Card, Form, Button } from 'react-bootstrap';
import user_icon from '../img/user.png';
import { Card, Form } from 'react-bootstrap';
import password_icon from '../img/password.png';
import email_icon from '../img/email.png';


const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [action, setAction] = useState("Sign In");

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
                localStorage.setItem('isLog' , 'false');
            }
        } catch (error) {
            console.error('Error:', error);
        }    
    };

    useEffect( ()=> {
        let errLogin = localStorage.getItem('errorInLogin');
        setMessage(errLogin);
    }, []);
    

    return (
    <main className='App-login'>
        <Card>
       
        <div className='form-container'>
        <Form onSubmit={handleSubmit}>
            
            <div className='header'>
                <div className='text'>{action}</div>
                {action==="Sign Up" ? <p></p> : <p className='red'><b>{message}</b></p>}
                
                <div className='underline'></div>
            </div>
            <div className='inputs' >
                {action==="Sign In"? <div></div> 
                    :
                    <Form.Group>
                        <Form.Label className='input'>
                            <img src={email_icon} alt=''  />
                            <input type='email' placeholder='Email Address' required/>
                        </Form.Label>
                        <div className='input'>
                            <img src={user_icon} alt=''  />
                            <input type='text' placeholder='Full Name' required/>
                        </div>
                    </Form.Group>
                }
            
                <div className='input'>
                    <img src={user_icon} alt=''  />
                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
            
                <div className='input'>
                    <img src={password_icon} alt=''  />
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
            </div>
            
            {action==="Sign Up" ? <div></div>
            :
            <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
             }
            
            <div className='submit-container'>
                <div className={action==="Sign In" ? "submit gray":"submit"} onClick={() =>{setAction("Sign Up")}}> Sign Up</div>
                <button className={action==="Sign Up" ? "submit gray":"submit"} onClick={() =>{setAction("Sign In")}}>Sign In</button>
            </div>
        </Form>   
        </div>
        </Card>
    </main>
    );
};

export default LoginForm;