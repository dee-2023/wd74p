import { Button, Container, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './member.css';


const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('********');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    alert('Email address updated');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 

  useEffect( ()=> {
    let checkLog = localStorage.getItem('isLog');
    if (checkLog ==='false'){
      navigate('/login')
    }
  }, []);
  
  return(
<Container className="homebody">
    <h2 className="dashboard-title">Dashboard</h2>
    <p className="dashboard-welcome">Welcome to your Dashboard</p>
    <Container className="dashboard">
      <section className="account-management">
        <h2 className="section-title">Account Management</h2>
        <Container>
          <Form.Group className="account-group">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={email} onChange={handleEmailChange} className="form-control"/>
            <Button>update</Button>
          </Form.Group>
          <Form.Group className="account-group">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={password} onChange={handlePasswordChange} className="form-control"/>
            <Button>update</Button>
          </Form.Group>
        </Container>
      </section>

      
    </Container>






    </Container>
  );

}

export default Dashboard;