import React from 'react';
import Question from "@/components/QuizPage/Question";
import Answer from "@/components/QuizPage/Answer";
import {Col, Row} from "react-bootstrap";

interface QuizCardProps {
    questionNumber: number;
    questionText: string;
    answers: {
        javascript: string;
        html: string;
        css: string;
        python: string;
    };
}

const QuizCard = ({answers, questionNumber, questionText}: QuizCardProps, ) => {
    return (
        <>
            <Question questionNumber={questionNumber} questionText={questionText} />
            <Row className={"d-flex justify-content-center align-items-center"}>
                <Col className={"d-flex justify-content-center"}><Answer answerCode={"javascript"} answerText={answers.javascript}/> </Col>
                <Col className={"d-flex justify-content-center"}><Answer answerCode={"html"} answerText={answers.html}/> </Col>
                <Col className={"d-flex justify-content-center"}><Answer answerCode={"css"} answerText={answers.css}/> </Col>
                <Col className={"d-flex justify-content-center"}><Answer answerCode={"python"} answerText={answers.python}/> </Col>
            </Row>
        </>
    );
};

export default QuizCard;