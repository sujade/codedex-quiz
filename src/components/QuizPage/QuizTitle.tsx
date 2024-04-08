import React from 'react';
import {Col, Row} from "react-bootstrap";

const QuizTitle = () => {
    return (
        <>
            <Row>
                <Col className={"text-uppercase mt-5 text-center"} id={"main-title"}><h1>What codédex course are you?</h1></Col>
            </Row>
            <Row>
                <Col className={"mt-3 text-center"}><h5>Codédex offers many different courses!<br/>
                Would you like to know which one you are?</h5></Col>
            </Row>

        </>
    );
};

export default QuizTitle;