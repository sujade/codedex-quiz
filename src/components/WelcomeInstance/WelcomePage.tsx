import WelcomeTitle from "@/components/WelcomeInstance/WelcomeTitle";

interface WelcomePageProps {
    onStartQuiz: () => void;
}

const WelcomePage = ({ onStartQuiz }: WelcomePageProps ) => {
    return (
        <div id={"welcome-page"} className={"pt-5 "}>
            <WelcomeTitle onStartQuiz={onStartQuiz}/>
        </div>
    );
};

export default WelcomePage;