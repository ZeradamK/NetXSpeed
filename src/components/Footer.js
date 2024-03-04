import {Col,Row,Container} from "reactstrap";
import React from "react";
import '../styles/footer.css'
import About from "../features/footerfeatures/About";
import Advert from "../features/footerfeatures/Advert";
import Contact from "../features/footerfeatures/Contact";
const Footer=()=>{
    return(
        <footer className='bottomFooter'>
                <About/>
                <Contact/>
                <Advert/>
        </footer>
    )
}
export default Footer;