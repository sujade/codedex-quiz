import React from 'react';
import Question from "@/components/QuizInstance/Question";
import Answer from "@/components/QuizInstance/Answer";
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
    onChoose: (answerCode: "javascript" | "html" | "css" | "python") => void;
}

const QuizCard = ({answers, questionNumber, questionText, onChoose}: QuizCardProps,) => {
    return (
        <>
            <Question questionNumber={questionNumber} questionText={questionText}/>
            <Row className={"d-flex justify-content-center align-items-center"}>
                <Col className={"d-flex justify-content-center"}><Answer onClick={() => onChoose("javascript")}
                                                                         answerCode={"javascript"}
                                                                         answerText={answers.javascript}/> </Col>
                <Col className={"d-flex justify-content-center"}><Answer onClick={() => onChoose("html")}
                                                                         answerCode={"html"} answerText={answers.html}/>
                </Col>
                <Col className={"d-flex justify-content-center"}><Answer onClick={() => onChoose("css")}
                                                                         answerCode={"css"} answerText={answers.css}/>
                </Col>
                <Col className={"d-flex justify-content-center"}><Answer onClick={() => onChoose("python")}
                                                                         answerCode={"python"}
                                                                         answerText={answers.python}/> </Col>
            </Row>
        </>
    );
};

export default QuizCard;