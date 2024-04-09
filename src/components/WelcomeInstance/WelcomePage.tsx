"use client";
import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

interface WelcomeTitleProps {
    onStartQuiz: () => void;
}

/**
 *
 * @param onStartQuiz
 * @constructor
 */
const WelcomePage = ({onStartQuiz}: WelcomeTitleProps) => {

    return (
        <div id={"welcome-page"} className={"pt-5 "}>
            <Row className={"d-flex justify-content-between"}>
                <Col md={1}></Col>
                <Col md={2}
                     className={"d-flex align-self-center"}>
                    <div id={"spinning-coin"}></div>
                </Col>
                <Col md={8} className={"text-start text-uppercase"}><h1 id={"main-title"}>What codédex course are
                    you?</h1></Col>
            </Row>
            <Row>
                <Col className={"mt-3 text-center"}><h3>Codédex offers many different courses!<br/>
                    Would you like to know which one you are?</h3></Col>
            </Row>
            <Row className={"text-center mt-3"}>
                <Col><h3>Ready to find out? Then press the button!</h3></Col>
            </Row>
            <Row className={"d-flex align-content-center justify-content-center mt-5 mb-5"}>
                <Button className={"border border-3 border-black text-uppercase"} onClick={onStartQuiz}
                        id={"start-button"}
                        variant={"warning"} size={"lg"}>Start!</Button>
            </Row>
        </div>
    );
};

export default WelcomePage;