import React from 'react';
import {Container} from "react-bootstrap";
import { FaHeart } from "react-icons/fa";


const Footer = () => {
    return (
        <Container id={"footer"} className={"text-center mt-5 border border-3 border-warning rounded p-3"}>
            <p>This personality quiz is made for <a href={"https://www.codedex.io/community/monthly-challenge/submission/JDOP2gqJh12IalbyRy6Y"}> Codédex Monthly Challenge!</a></p>
        <p>Made with lots of <FaHeart /> by <a href={"https://github.com/sujade"}>Su Jade</a></p>
            <a href={"/sources"}>Sources</a>
        </Container>
    );
};

export default Footer;