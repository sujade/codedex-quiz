"use client";
import WelcomePage from "@/components/WelcomePage/WelcomePage";
import QuizPage from "@/components/QuizPage/QuizPage";
import React, {useState} from "react";
import Footer from "@/components/Footer";


export default function Home() {
    const [showQuiz, setShowQuiz] = useState(false);

    const handleStartQuiz = () => {
        setShowQuiz(true);
    };

    return (
        <div>
            {showQuiz ? (
                <QuizPage />
            ) : (
                <WelcomePage onStartQuiz={handleStartQuiz} />
            )}
            <Footer/>
        </div>
    );
};