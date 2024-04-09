'use client';
import React from 'react';
import {Button} from "react-bootstrap";
import GoBackButton from "@/components/ResultInstance/GoBackButton";

const AllrounderResult = () => {
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("URL copied to clipboard");
    };

    return (
        <div className={"pt-5 text-center"}>
            <h4 className={"m3-5"}>You are...</h4>
            <h1 className={"text-uppercase"}>an allrounder!</h1>
            <h5 className={"ms-5 me-5 ps-5 pe-5 mb-3 mt-3"}>Wow! You&#39;re so diverse in your results that we
                couldn&#39;t
                put you on a single result. That means you&#39;re really something else! You probably want to create,
                style,
                make it work all the same. That means you&#39;re ready to take your skills to the next level!<br/> <br/>
                There is something for everyone on Codédex! Why don&#39;t you try some of their very cool expansions?
            </h5>

            <h5 className={"mt-3 mb-5"}>Click<a href={"https://www.codedex.io/command-line"}> here</a> to find out about
                the
                Command Line (Expansion) course <br/>and <a href={"https://www.codedex.io/git-github"}>here</a> to find
                out about
                the Git & GitHub (Expansion) course!</h5>
            <Button className={"border border-3 border-black mb-3"} variant={"warning"} size={"lg"}
                    onClick={handleShare}>Share</Button>
            <br/>
            <GoBackButton/>
        </div>
    );
};

export default AllrounderResult;