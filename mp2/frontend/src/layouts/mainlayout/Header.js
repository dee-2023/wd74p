import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './layout.css';


const Header = () => {

 return(

    <header> 
   
      <Navbar bg="light" data-bs-theme="light" className="navbar">
         <Container>
            <Nav activeKey="/home">
               <Nav.Link href="/home"><b>Home</b></Nav.Link>
               <Nav.Link href="/about"><b>About</b></Nav.Link>
               <Nav.Link href="/contact"><b>Contact</b></Nav.Link>
               <Nav.Link href="/blog-page"><b>Blog</b></Nav.Link>
            </Nav>  
            <Nav>
               <Nav className="justify-content-end">
               <Nav.Link href="/login"><b>Login</b></Nav.Link>
            </Nav></Nav>
         </Container>
      </Navbar>
   

   </header>

   );
  

};

export default Header;