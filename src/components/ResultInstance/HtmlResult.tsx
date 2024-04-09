'use client';
import React from 'react';
import {Button} from "react-bootstrap";
import GoBackButton from "@/components/ResultInstance/GoBackButton";

const HtmlResult = () => {
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("URL copied to clipboard");
    };

    return (
        <div className={"pt-5 text-center"}>
            <h4 className={"m3-5"}>You are...</h4>
            <h1 className={"text-uppercase"}>HTML!</h1>
            <h5 className={"ms-5 me-5 ps-5 pe-5 mb-3 mt-3"}>You don&#39;t just stick to the basics, you own them!
                Whenever you need to create new web application,
                you think carefully, start strong and make it yours! Creating elements, lists, tables and structure is
                totally your playground! <br/> <br/>
                Did you know that you could master your HTML groundwork on Codédex and build projects as well?</h5>

            <h5 className={"mt-3 mb-5"}>Click<a href={"https://www.codedex.io/html"}> here</a> to find out about The
                Origins I: HTML course!</h5>
            <Button className={"border border-3 border-black mb-3"} variant={"warning"} size={"lg"}
                    onClick={handleShare}>Share</Button>
            <br/>
            <GoBackButton/>
        </div>
    );
};

export default HtmlResult;