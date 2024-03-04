import {Row, Col} from "reactstrap";
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.webp';
import './Contact.css';
const Contact = ()=> {
    return (
        <Row id='aboutLinks'>
            <Col className='col-md-1'>
                <a href='https://www.linkedin.com/in/zeradamkiflefantaye/'><img id='linkedin' src={linkedin} alt='linkedin'/></a>
            </Col>
        </Row>
    )
}
export default Contact;
