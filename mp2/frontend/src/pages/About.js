import girl from '../img/relax.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Row, Col } from 'react-bootstrap';
import './contact.css';

const About = () => {

    return(

<Container className="Col text-center" >
    <h2 className="text-center"> About Us </h2><hr /><hr />
    <Row>
        <Col xs={6} md={6}>
            <Image src={girl} alt="girl on kayak" />
        </Col>
        <Col xs={12} md={6} className="asideright">
            <p><br /><br />In a world inundated with emails, fake news, status updates, smartphones and connected watches, we exist to bring you back to the moment.</p><br />
            <p>This is the moment our customer finds balance; when they stop focusing on what they should be doing and intead focus on what they want to do.</p><br /><br />
    
        </Col>
        
    </Row><hr /><hr />
</Container>

    );

}

export default About