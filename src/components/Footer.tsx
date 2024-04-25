import React from 'react';
import {Button, Container} from "react-bootstrap";
import {FaHeart} from "react-icons/fa";

interface FooterProps {
    onFontSwitch: () => void;
}

/**
 * Renders a footer of the page that contains the information about the challenge, the creator of the quiz, the sources used, and a button to toggle between a more accessible font.
 */
const Footer = ({onFontSwitch}: FooterProps) => {
    return (
        <Container id={"footer"}
                   className={"footer d-flex flex-column align-items-center justify-content-center text-center mt-5 border border-3 border-warning rounded p-3"}>
            <p>This personality quiz is made for <a
                href={"https://www.codedex.io/community/monthly-challenge/submission/Vsf2seRgMVItdQ8iilXE"}> Codédex
                Monthly Challenge!</a></p>
            <p>Made with lots of <FaHeart/> by <a href={"https://github.com/sujade"}>Su Jade</a></p>
            <a href={"/sources"}>Sources</a>

            <p className={"mt-3"}>If the current font is difficult for you to read:</p>

            <Button className={"border border-3 border-black text-uppercase"} onClick={onFontSwitch}
                             variant={"warning"} size={"sm"}>Change Font</Button>
        </Container>
    );
};

export default Footer;