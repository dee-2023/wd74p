import React,{useState} from 'react';
import { useEffect } from 'react';
import "./member.css";
import { Button, Container, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false);
    const [dateInput, setDateInput] = useState('');
    const [isValid, setIsValid] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    }, [cart]);

    const handleCheckoutToggle = () => {
        setShowCheckout(!showCheckout);
      };

      const validateDate = () => {
        const regex = /^\d{2}\/\d{2}$/;
        if (regex.test(dateInput)) {
          setIsValid(true);
          alert("Valid date format: " + dateInput);
        } else {
          setIsValid(false);
          alert("Invalid date format. Please use MM/YY format.");
        }
      };     


  return (
    <Container>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.ImageUrl} alt=''/>
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <Button onClick={()=>handleChange(item, +1)}> + </Button>
                        <Button>{item.amount}</Button>
                        <Button onClick={()=>handleChange(item, -1)}> - </Button>
                    </div>
                    <div>
                        <span>${item.price}</span>
                        <Button variant='warning' onClick={()=>handleRemove(item.id)} >Remove</Button>
                    </div>
                </div>
        ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>$  {price}</span>
        </div>
        <Button variant='primary' className="justify-content-end" onClick={handleCheckoutToggle}>
        Checkout
        </Button>
            {showCheckout && (
                <div className='checkout-form'>
                    <h3>Enter Credit Card Information</h3>
                <Form>
            
            <Form.Group controlId='CCname'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Name on Card' />
            </Form.Group>
            <Form.Group controlId='CCnumber'>
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control type='text' placeholder='Enter your credit card number' />
            </Form.Group>
            <Form.Group controlId='CCexp'>
              <Form.Label>Expiration date</Form.Label>
              <Form.Control type="text" id="dateInput" pattern="\d{2}/\d{2}" maxlength="5" placeholder="MM/YY" required/>
            </Form.Group>
            <Button variant='success' onClick={handleShow}>Proceed to Payment</Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your payment!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    
          </Form>
        </div>
      )}
    </Container>
  )
}

export default Cart