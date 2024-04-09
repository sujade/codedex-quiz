import React from 'react';
import {Button} from "react-bootstrap";

interface AnswerProps {
    answerCode: "javascript" | "html" | "css" | "python";
    answerText: string;
    onClick: () => void;
}

function Answer({answerCode, answerText, onClick}: AnswerProps) {
    return (
        <Button onClick={onClick} className="answer mt-5 text-center border-3 border-black">
            <p className={"invisible"}>{answerCode}</p>
            <h4>{answerText}</h4>
        </Button>
    );
}

export default Answer;