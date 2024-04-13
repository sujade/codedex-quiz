'use client';
import React from 'react';
import GoBackButton from "@/components/ResultInstance/GoBackButton";
import ShareBox from "@/components/ResultInstance/ShareBox";

/**
 * Renders the result for the python result
 */
const PythonResult = () => {
    return (
        <div className={"pt-5 text-center"}>
            <h4 className={"m3-5"}>You are...</h4>
            <h1 className={"text-uppercase"}>Python!</h1>
            <h5 className={"ms-5 me-5 ps-5 pe-5 mb-3 mt-3"}>You&#39;re Python, how cool is that?!
                You know your way around so many things including loops, control flow and even modules! You can also
                create your own functions and classes! You can build very cool applications like games, calculators, and
                even a terminal adventure! You go hard, but you know where to limit yourself. This quality makes you
                dependable and strong in teamplay. You&#39;re always ready to learn new things and pass the info to the
                newcomers at all times. Keep it up!
                <br/> <br/>
                Did you know that you could master your Python groundwork on Codédex and build projects as well?
                And if you&#39;re already proficient in Python, you can also check the Intermediate Python and Numpy
                course!
            </h5>

            <h5 className={"mt-3 mb-5"}>Click<a href={"https://www.codedex.io/python"}> here</a> to find out about The
                Legend
                of Python course <br/> and click <a href={"https://www.codedex.io/intermediate-python"}>here</a> to find
                out about
                Intermediate Python course <br/> and finally, click <a href={"https://www.codedex.io/numpy"}>here</a> to
                find out about the Numpy course!</h5>
            <ShareBox/>
            <br/>
            <GoBackButton/>

        </div>
    );
};

export default PythonResult;