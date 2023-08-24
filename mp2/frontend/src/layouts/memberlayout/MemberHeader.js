import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../mainlayout/layout.css';
import { useState } from "react";
import { Button } from "react-bootstrap";
const AdminHeader = () => {

   const setisLoggedIn = useState(null);

  const logOut = () => {
    setisLoggedIn(false);
  };

 return(

   <header> 
   <Navbar bg="dark" data-bs-theme="dark">
      <Container>
         <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/online-shop">Shop</Nav.Link>
         </Nav>

         <Container>
            <Button href="/home" className="justify-content-end" onClick={logOut}>Logout</Button>
            </Container>
         
      </Container>
   </Navbar>

 </header>

   )
  

}

export default AdminHeader;