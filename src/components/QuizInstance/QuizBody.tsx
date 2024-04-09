import React, {useState} from 'react';
import QuizTitle from "@/components/QuizInstance/QuizTitle";
import QuizCard from "@/components/QuizInstance/QuizCard";
import ResultLinkButton from "@/components/ResultInstance/ResultLinkButton";
import {quizData} from "@/components/QuizInstance/quizData";

const QuizBody = () => {
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
            <div className={"text-center mt-5 mb-3"}>
                <h1>Are you curious about your results?</h1>
                <h5 className={"mb-5"}>Just a button away from finding out what Codédex course you are!</h5>
                <ResultLinkButton cssScore={cssScore} htmlScore={htmlScore} javascriptScore={javascriptScore}
                                  pythonScore={pythonScore}/>
            </div>)
    } else {
        return <>
            <QuizTitle/>
            <QuizCard {...quizData[currentQuestionIndex]} onChoose={onChoose}/>
        </>
    }
}

export default QuizBody;