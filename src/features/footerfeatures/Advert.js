import {Col,Row,Container} from "reactstrap";
import '../../styles/footer.css';
import googleLogo from '../../assets/googleLogo.png';
const Advert = ()=>{
    return (
            <div id='poweredbycontainer'>
                    <img id='google-logo' src={googleLogo} />
            </div>
    )
}
export default Advert;