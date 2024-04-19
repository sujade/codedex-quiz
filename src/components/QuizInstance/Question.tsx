import React from 'react';

interface QuestionProps {
    questionNumber?: string;
    questionText?: string;
}

/**
 * Renders a question title and prompt
 * @param questionNumber contains the number of the question
 * @param questionText contains the text/prompt of the question
 */
function Question({questionNumber, questionText}: QuestionProps) {
    return (
        <div className="question mt-5 text-center">
            <h2>Question {questionNumber}</h2>
            <h4>{questionText}</h4>
        </div>
    );
}

export default Question;