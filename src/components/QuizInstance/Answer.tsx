import React, {ReactElement} from 'react';
import {Button, Row} from "react-bootstrap";

interface AnswerProps {
    answerCode: "javascript" | "html" | "css" | "python";
    answerText: string;
    onClick: () => void;
    answerIcon: ReactElement;
}

/**
 * Renders an answer button
 * @param answerCode contains the score code of the answer
 * @param answerText contains the text to display
 * @param answerIcon contains the icon to display
 * @param onClick contains the function to call when the answer is clicked
 */
function Answer({answerCode, answerText, onClick, answerIcon}: AnswerProps) {
    return (
        <Button onClick={onClick} className="answer mt-5 text-center border-3 border-black d-flex flex-column align-items-center py-4">
            <span className={"mb-5"}>{answerIcon}</span>
            <h5>{answerText}</h5>
        </Button>
    );
}

export default Answer;