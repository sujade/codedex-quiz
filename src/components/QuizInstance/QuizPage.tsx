import React, {useState} from 'react';
import QuizCard from "@/components/QuizInstance/QuizCard";
import ResultLinkButton from "@/components/ResultInstance/ResultLinkButton";
import {quizData} from "@/components/QuizInstance/quizData";
import { GiDrum } from "react-icons/gi";

/**
 * Renders the actual quiz and handles the score and the question to show
 */
const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [pythonScore, setPythonScore] = useState(0);
    const [javascriptScore, setJavascriptScore] = useState(0);
    const [htmlScore, setHtmlScore] = useState(0);
    const [cssScore, setCssScore] = useState(0);


    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const onChoose = (answerCode: "javascript" | "html" | "css" | "python") => {
        switch (answerCode) {
            case 'python':
                setPythonScore(value => value + 1);
                break;
            case 'javascript':
                setJavascriptScore(value => value + 1);
                break;
            case 'html':
                setHtmlScore(value => value + 1);
                break;
            case 'css':
                setCssScore(value => value + 1);
                break;
        }
        handleNextQuestion()
    }

    if (quizFinished) {
        return (
            <div className={"text-center mt-5"}>
                <h1>Are you curious about your results?</h1>
                <GiDrum className={"mt-3"} size={50}/>
                <h5 className={"mb-3"}>*drumroll*</h5>
                <ResultLinkButton cssScore={cssScore} htmlScore={htmlScore} javascriptScore={javascriptScore}
                                  pythonScore={pythonScore}/>
            </div>)
    } else {
        return <>
            <QuizCard {...quizData[currentQuestionIndex]} onChoose={onChoose}/>
        </>
    }
}

export default QuizPage;