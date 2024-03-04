import {Col,Row,Container} from "reactstrap";
import MainLogic from "../features/MainLogic/MainLogic";
import '../styles/body.css'
const Body = ()=>{



    return(
        <Container className='body'>
            <MainLogic/>
        </Container>
    )
}
export default Body


