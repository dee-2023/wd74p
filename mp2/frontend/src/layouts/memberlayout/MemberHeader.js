import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const MemberHeader = () => {
   const navigate = useNavigate();
   

   const setisLoggedIn = useState(null);
   const logOut = () => {
     setisLoggedIn(false);
     navigate('/home');
   };


   return (
  
     
   <Navbar bg="dark" data-bs-theme="dark">
      <Container>
         <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/online-shop">Shop</Nav.Link>
         </Nav>

         <Nav className="justify-content-end">
         <Nav.Link href="/home" className="justify-content-end" onClick={logOut}>Logout</Nav.Link>
         
      </Nav>   
      </Container>
   </Navbar>
   )
};
 


export default MemberHeader;