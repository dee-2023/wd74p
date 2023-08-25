import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


const Dashboard = () => {
  const navigate= useNavigate();
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('********');
  const [savedItems, setSavedItems] = useState([
    'Article 1',
    'Video 2',
    'Product 3',
  ]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSaveItem = (item) => {
    setSavedItems([...savedItems, item]);
  };

  useEffect( ()=> {
    let checkLog = localStorage.getItem('isLog');
    if (checkLog =='false'){
      navigate('/login')
    }
}, []);
  
  return(
<Container>
    <h2 className='mtop'>Dashboard</h2>
    <p>Welcome to your Dashboard</p>
    <div className="dashboard">
      <section className="account-management">
        <h2>Account Management</h2>
        <div className="account-details">
          <div className="input-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
            <button>update</button>
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button>update</button>
          </div>
        </div>
      </section>

      <section className="saved-items">
        <h2>Saved Items</h2>
        <ul>
          {savedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="add-item">
          <input
            type="text"
            placeholder="Enter item name"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSaveItem(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      </section>
    </div>






    </Container>
  );

}

export default Dashboard;