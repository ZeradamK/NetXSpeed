import {Col,Row,Container} from "reactstrap";
import '../../styles/footer.css';
import googleLogo from '../../assets/googleLogo.png';
const About = ()=>{
    return (
        <Container className='d-flex flex-row' id='aboutContainer'>
            <Row>
                <Col>
                    <h1 id='copywrite'>Developed and Copyrighted by Zeradam Kifle©</h1>
                </Col>
            </Row>
        </Container>
    )
}
export default About;