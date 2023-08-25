import { Button, Container, Card, CardGroup } from 'react-bootstrap';
import './home.css';
import '../img/relax.jpg';
import hammock from '../img/hammock.png';
import relax from '../img/relax.jpg';
import elNidoHead from '../img/elnidohead.png';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cebu from '../img/cebu.png';
import bohol from '../img/bohol.png';
import coron from '../img/coron.png';
import tagaytay from '../img/tagaytay.png';

const Home = () => {

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
            <Container>
                <img src={cebu} alt="cebu" />
            </Container>
            <Container>
                <img src={bohol} alt="bohol" />
            </Container>
            <Container>
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
            
            <Button className='btn-success btn-lg'>Plan Your Adventure Now</Button>

        </Container>
        <CardGroup className='mt-5'>
            <Card className='m-3'>
                <Card.Img variant="top" src={hammock}  />
                <Card.Body>
                    <Card.Title>Tour A</Card.Title>
                    <Card.Text>
                   <b> Tropical Getaway Package:</b> Dive into paradise with our Tropical Getaway Package, offering a week-long escape to the pristine beaches of Bali. Enjoy luxurious accommodations, thrilling water sports, and guided tours to ancient temples. It's the perfect opportunity to relax, unwind, and explore the beauty of Indonesia's most enchanting island.
                    </Card.Text>
                    <Button variant="info">Get Qoute</Button>
                </Card.Body>
            </Card>

            <Card className='m-3'>
                <Card.Img variant="top" src={elNidoHead}/>
                <Card.Body>
                    <Card.Title>Tour B</Card.Title>
                    <Card.Text>
                   <b> Wildlife Safari Expedition:</b> For the nature enthusiasts, our Wildlife Safari Expedition offers an up-close encounter with the wild. Journey deep into the heart of Africa, where you'll witness the Big Five in their natural habitat. From thrilling game drives to cozy bush lodges, this package promises an awe-inspiring safari adventure you'll cherish forever.
                    </Card.Text>
                    <Button variant="info">Get Qoute</Button>
                </Card.Body>  
            </Card>

            <Card className='m-3'>
                <Card.Img variant="top" src={relax} />
                <Card.Body>
                    <Card.Title>Tour C</Card.Title>
                    <Card.Text>
                    <b>Adventure Expedition Package: </b> Seek thrills and adrenaline? Our Adventure Expedition Package takes you on an unforgettable journey, including white-water rafting, zip-lining through lush rainforests, and trekking in the Himalayas.
                    </Card.Text>
                    <Button variant="info">Get Qoute</Button>
                </Card.Body>       
            </Card>

            <Card className='m-3'>
                <Card.Img variant="top" src={tagaytay} />
                <Card.Body>
                    <Card.Title>Tour D</Card.Title>
                    <Card.Text>
                   <b> Adventure Expedition Package: </b> Seek thrills and adrenaline? Our Adventure Expedition Package takes you on an unforgettable journey, including white-water rafting, zip-lining through lush rainforests, and trekking in the Himalayas.
                    </Card.Text>
                    <Button variant="info">Get Qoute</Button>
                </Card.Body>       
            </Card>

        </CardGroup>
    </Container>





    );

    
}

export default Home