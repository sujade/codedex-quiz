'use client';
import React from 'react';
import {Button} from "react-bootstrap";
import GoBackButton from "@/components/ResultInstance/GoBackButton";

const CssResult = () => {
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("URL copied to clipboard");
    };

    return (
        <div className={"pt-5 text-center"}>
            <h4 className={"m3-5"}>You are...</h4>
            <h1 className={"text-uppercase"}>CSS!</h1>
            <h5 className={"ms-5 me-5 ps-5 pe-5 mb-3 mt-3"}>Styling is your game. You don't only create different
                elements, lists, tables, but you can also style them very well! Centering divs are going to be a distant
                issue once you figure everything out! Before you know it, you'll be animating elements too!<br/> <br/>
                Did you know that you could master your CSS groundwork on Codédex and build projects as well?</h5>

            <h5 className={"mt-3 mb-5"}>Click<a href={"https://www.codedex.io/css"}> here</a> to find out about The
                Origins
                II: CSS course!</h5>
            <Button className={"border border-3 border-black mb-3"} variant={"warning"} size={"lg"}
                    onClick={handleShare}>Share</Button>
            <br/>
            <GoBackButton/>
        </div>
    );
};

export default CssResult;