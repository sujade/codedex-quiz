import React from 'react';
import {Button, Container} from "react-bootstrap";

interface AnswerProps {
    answerCode: "javascript"|"html"|"css"|"python";
    answerText: string;
}

function Answer({ answerCode, answerText }: AnswerProps) {
    return (
        <Button className="answer mt-5 text-center border-3 border-black">
            <p className={"invisible"}>{answerCode}</p>
            <h4>{answerText}</h4>
        </Button>
    );
}

export default Answer;