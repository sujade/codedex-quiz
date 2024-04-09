"use client";
import WelcomePage from "@/components/WelcomeInstance/WelcomePage";
import QuizPage from "@/components/QuizInstance/QuizPage";
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
        </div>
    );
};