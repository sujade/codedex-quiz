"use client";
import WelcomePage from "@/components/WelcomeInstance/WelcomePage";
import QuizPage from "@/components/QuizInstance/QuizPage";
import React, {useRef, useState} from "react";


export default function Home() {
    const [showQuiz, setShowQuiz] = useState(false);

    const handleStartQuiz = () => {
        setShowQuiz(true);
        startSoundRef.current?.play()
        backgroundMusicRef.current?.play()
    };

    const backgroundMusicRef = useRef<HTMLAudioElement>(null)
    const startSoundRef = useRef<HTMLAudioElement>(null)

    return (
        <div>
            {showQuiz ? (
                <QuizPage/>
            ) : (
                <WelcomePage onStartQuiz={handleStartQuiz}/>
            )}

            <audio ref={backgroundMusicRef} src="/sounds/purely-grey-phantasm.mp3"/>
            <audio ref={startSoundRef} src="/sounds/start.mp3"/>
        </div>
    );
};