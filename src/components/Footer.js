import {Col,Row,Container} from "reactstrap";
import React from "react";
import '../styles/footer.css'
import About from "../features/footerfeatures/About";
import Advert from "../features/footerfeatures/Advert";

const Footer=()=>{
    return(
        <footer className='bottomFooter'>
                <About/>
            <Advert/>
        </footer>
    )
}
export default Footer;