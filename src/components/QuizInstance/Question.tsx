import React from 'react';

interface QuestionProps {
    questionNumber?: number;
    questionText?: string;
}

function Question({questionNumber, questionText}: QuestionProps) {
    return (
        <div className="question mt-5 text-center">
            <h2>Question {questionNumber}</h2>
            <h4>{questionText}</h4>
        </div>
    );
}

export default Question;