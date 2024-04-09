'use client';
import React from 'react';
import {Button} from "react-bootstrap";
import GoBackButton from "@/components/ResultInstance/GoBackButton";

const JavascriptResult = () => {
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("URL copied to clipboard");
    };

    return (
        <div className={"pt-5 text-center"}>
            <h4 className={"m3-5"}>You are...</h4>
            <h1 className={"text-uppercase"}>JavaScript!</h1>
            <h5 className={"ms-5 me-5 ps-5 pe-5 mb-3 mt-3"}>Whoa! You&#39;re JavaScript! Now, we all know what that
                means.
                You&#39;re very capable in terms of creating new projects and creating interactive web-applications with
                responsive interface! You can also use functions, variables and arrays the way you want!<br/> <br/>
                Did you know that you could master your JavaScript groundwork on Codédex and build projects as well?
                And if you&#39;re already proficient in JavaScript, you can also check the React course!
            </h5>

            <h5 className={"mt-3 mb-5"}>Click<a href={"https://www.codedex.io/html"}> here</a> to find out about The
                Origins
                III: JavaScript course <br/>and <a href={"https://www.codedex.io/react"}>here</a> to find out about
                Framework Valley: React course!</h5>
            <Button className={"border border-3 border-black mb-3"} variant={"warning"} size={"lg"}
                    onClick={handleShare}>Share</Button>
            <br/>
            <GoBackButton/>
        </div>
    );
};

export default JavascriptResult;