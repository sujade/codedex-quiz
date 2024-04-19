import React, {ReactElement} from 'react';
import Question from "@/components/QuizInstance/Question";
import Answer from "@/components/QuizInstance/Answer";
import {Col, Row} from "react-bootstrap";

interface AnswerTextWithIcon {
    icon: ReactElement;
    text: string;
}

interface QuizCardProps {
    questionNumber: string;
    questionText: string;
    answers: {
        javascript: AnswerTextWithIcon,
        html: AnswerTextWithIcon,
        css: AnswerTextWithIcon,
        python: AnswerTextWithIcon
    };
    onChoose: (answerCode: "javascript" | "html" | "css" | "python") => void;
}

/**
 * Renders the whole question card along with the question itself and the answer buttons
 * @param answers contains the answers to display
 * @param questionNumber contains the number of the question
 * @param questionText contains the question text/prompt
 * @param onChoose contains the function to call when an answer is chosen
 */
const QuizCard = ({answers, questionNumber, questionText, onChoose}: QuizCardProps,) => {
    return (
        <>
            <Question questionNumber={questionNumber} questionText={questionText}/>
            <Row className={"d-flex justify-content-center align-items-center"}>
                <Col className={"d-flex justify-content-center"}><Answer onClick={() => onChoose("javascript")}
                                                                         answerCode={"javascript"}
                                                                         answerText={answers.javascript.text}
                                                                         answerIcon={answers.javascript.icon}/> </Col>
                <Col className={"d-flex justify-content-center"}><Answer onClick={() => onChoose("html")}
                                                                         answerCode={"html"}
                                                                         answerText={answers.html.text}
                                                                         answerIcon={answers.html.icon}/>
                </Col>
                <Col className={"d-flex justify-content-center"}><Answer onClick={() => onChoose("css")}
                                                                         answerCode={"css"}
                                                                         answerText={answers.css.text}
                                                                         answerIcon={answers.css.icon}/>
                </Col>
                <Col className={"d-flex justify-content-center"}><Answer onClick={() => onChoose("python")}
                                                                         answerCode={"python"}
                                                                         answerText={answers.python.text}
                                                                         answerIcon={answers.python.icon}/> </Col>
            </Row>
        </>
    );
};

export default QuizCard;