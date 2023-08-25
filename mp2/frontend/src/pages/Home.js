import { Button, Container, Card, CardGroup, Modal, Table } from 'react-bootstrap';
import './home.css';
import '../img/relax.jpg';
import hammock from '../img/hammock.png';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cebu from '../img/cebu.png';
import bohol from '../img/bohol.png';
import coron from '../img/coron.png';
import tagaytay from '../img/tagaytay.png';
import kyoto from '../img/kyoto.png';
import paris from '../img/paris.png';
import { useState } from 'react';



const Home = () => {


  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [showModalD, setShowModalD] = useState(false);

  const [showPriceList] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleTourAClick = () => {
    setShowModalA(true);
  };
  const handleTourBClick = () => {
    setShowModalB(true);
  };
  const handleTourCClick = () => {
    setShowModalC(true);
  };
  const handleTourDClick = () => {
    setShowModalD(true);
  };

  const [showPlanModal, setShowPlanModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handlePlanClick = () => {
    setShowPlanModal(true);
  };

  const handleClosePlanModal = () => {
    setShowPlanModal(false);
  };

  const handleConfirmPlan = () => {
   
    if (!selectedPlan || !selectedDate || numberOfPeople <= 0) {
      alert('Please fill in all fields and select at least 1 person.');
      return;
    }

    console.log('Selected Plan:', selectedPlan);
    console.log('Selected Date:', selectedDate);
    console.log('Number of People:', numberOfPeople);
   
    setShowPlanModal(false);
  };

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
 
    
    return(
        

    <Container className="homebody">
        
        <Container className="carousel-container">
            <Slider {...settings}>
            <Container classname = "slide"> 
            <img src={cebu} alt="cebu" />
            </Container>
            <Container className="slide">
            <img src={bohol} alt="bohol" />
            </Container>
            <Container className="slide">
            <img src={coron} alt="coron" />
            </Container>
            </Slider>
        </Container>
        
        <Container className="text-center headtext mtop">
            <h2 className='h1' >Welcome to Vacation Island</h2>
            <h4>A Paradise within Paradise</h4>
        </Container>       


        <Container className="text-center">
            <h4 className="xperience" >Experience our island resorts</h4>
            <Button className='btn-success btn-lg' onClick={handlePlanClick}>
                Plan Your Adventure Now
        </Button>
        </Container>          
        <Modal show={showPlanModal} onHide={handleClosePlanModal}>
        <Modal.Header closeButton>
          <Modal.Title>Plan Your Adventure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Select Plan</th>
                <th>Select Date</th>
                <th>Number of People</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  >
                    <option value=""><strong>Select a Plan</strong></option>
                    <option value="Plan A">Tour A</option>
                    <option value="Plan A">Tour B</option>
                    <option value="Plan A">Tour C</option>
                    <option value="Plan A">Tour D</option>
                  
                  </select>
                </td>
                <td>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(Number(e.target.value))}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePlanModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirmPlan}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
       
        <CardGroup className='mt-5'>
            <Card className='m-3'>
                <Card.Img variant="top" src={hammock} style={{height: '200px' }} />
                <div>
                <div className="text-center"> 
                    <Card.Title>Tour A</Card.Title>
                </div>
                        <Card.Text>
                    <b> Tropical Getaway Package:</b> 
                    <p><b>Destination:</b>  Paradise Island Getaway</p>
                    <p>Duration: 7 Days / 6 Nights</p>
                    <p>Package Highlights:</p>
                    <ul style={{ fontSize: '15px' }}>
                    <li>Arrive at Paradise International Airport.</li>
                    <li>Private transfer to your luxury beachfront resort.</li>
                    <li>Welcome cocktail reception and check-in.</li>
                    <li>Evening at leisure to explore the resort or relax on the beach.</li> 
                    </ul>
                        </Card.Text>
                </div>
                
                <div className="mt-auto text-center"> 
                    <Button className='btn-success btn-lg' onClick={handleTourAClick}>
                    {showPriceList ? 'View Price List' : 'Open Price List'}
                    </Button>
                </div>
   
      <Modal show={showModalA} onHide={() => setShowModalA(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Price for Tour A</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>PLAN A Price: ₱10,000 Pax:10</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalA(false)}>
            Close
          </Button>
            </Modal.Footer>
          </Modal>
         </Card>
      
         <Card className='m-3'>
                <Card.Img variant="top" src={paris} style={{ height: '200px' }}/>
                <div>
                <div className="text-center"> 
                    <Card.Title>Tour B</Card.Title>
                </div>
                <Card.Text>
                    <b> Tropical Getaway Package:</b> 
                    <p><b>Destination:</b>  Romantic Parisian Escape:</p>
                    <p>Duration: 5 Days / 4 Nights</p>
                    <p>Package Highlights:</p>
                    <ul style={{ fontSize: '15px' }}>
                    <li>Round-trip airfare for two to Paris.</li>
                    <li>Luxury hotel accommodation in the heart of Paris.</li>
                    <li>Private Seine River cruise with dinner.</li>
                    <li>Day trip to the Palace of Versailles.</li> 
                    <li>Guided tour of the Louvre Museum.</li> 
                    </ul>
                </Card.Text>
                </div>
                
                <div className="mt-auto text-center"> 
                    <Button className='btn-success btn-lg' onClick={handleTourBClick}>
                    {showPriceList ? 'View Price List' : 'Open Price List'}
                    </Button>
                </div>
    
      <Modal show={showModalB} onHide={() => setShowModalB(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Price for Tour B</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>PLAN B Price: ₱25,000 Pax:20</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalB(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>  
            </Card>

      <Card className='m-3'>
                <Card.Img variant="top" src={kyoto} style={{ height: '200px' }} />
                <div>
                <div className="text-center"> 
                    <Card.Title>Tour C</Card.Title>
                </div>      
                <Card.Text>
                    <b> Tropical Getaway Package:</b> 
                    <p><b>Destination:</b>  Cultural Exploration in Kyoto:</p>
                    <p>Duration: 8 Days / 7 Nights</p>
                    <p>Package Highlights:</p>
                    <ul style={{ fontSize: '15px' }}>
                    <li>Round-trip airfare to Kyoto.</li>
                    <li>Stay in traditional Japanese ryokans.</li>
                    <li>Guided tours of Kyoto's historic temples and shrines.</li>
                    <li>Tea ceremony experience.</li> 
                    <li>Explore the Arashiyama Bamboo Forest.</li> 
                    </ul>
                </Card.Text>
                </div>
                
                <div className="mt-auto text-center"> 
                    <Button className='btn-success btn-lg' onClick={handleTourCClick}>
                    {showPriceList ? 'View Price List' : 'Open Price List'}
                    </Button>
                </div>
      
      <Modal show={showModalC} onHide={() => setShowModalC(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Price for Tour C</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>PLAN C Price: ₱30,000 Pax:30</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalC(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>       
            </Card>


            <Card className='m-3'>
                <Card.Img variant="top" src={tagaytay} style={{ height: '200px' }}/>
                <div>
                <div className="text-center"> 
                    <Card.Title>Tour D</Card.Title>
                </div>
                <Card.Text>
                    <b> Tropical Getaway Package:</b> 
                    <p><b>Destination:</b>  Cultural Immersion in Marrakech:</p>
                    <p>Duration: 6 Days / 5 Nights</p>
                    <p>Package Highlights:</p>
                    <ul style={{ fontSize: '15px' }}>
                    <li>Accommodation in a riad in the heart of Marrakech.</li>
                    <li>Guided tours of historic palaces and souks.</li>
                    <li>Moroccan cooking class and food tour.</li>
                    <li>Day trip to the Atlas Mountains.</li> 
                    <li>Visit to the Jardin Majorelle.</li> 
                    </ul>
                </Card.Text>
                </div>
                
                <div className="mt-auto text-center"> 
                    <Button className='btn-success btn-lg' onClick={handleTourDClick}>
                    {showPriceList ? 'View Price List' : 'Open Price List'}
                    </Button>
                </div>
      
      <Modal show={showModalD} onHide={() => setShowModalD(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Price for Tour D</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>PLAN D Price: ₱50,000 Pax:50</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalD(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>       
            </Card> 
      
      </CardGroup>
  
    </Container>
    );
  
 };

export default Home