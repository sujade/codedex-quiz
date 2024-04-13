'use client';
import React from 'react';
import GoBackButton from "@/components/ResultInstance/GoBackButton";
import ShareBox from "@/components/ResultInstance/ShareBox";

/**
 * Renders the result for the allrounder result
 */
const AllrounderResult = () => {
    return (
        <div className={"pt-5 text-center"}>
            <h4 className={"m3-5"}>You are...</h4>
            <h1 className={"text-uppercase"}>an allrounder!</h1>
            <h5 className={"ms-5 me-5 ps-5 pe-5 mb-3 mt-3"}>Wow! You&#39;re so diverse in your answers that we
                couldn&#39;t
                put you on a single result. That means you&#39;re really something else! You probably want to make something,
                style it and
                make it work all the same. You like taking on new challenges and keep on creating. Learning is
                definitely not a new word for you!That
                means you&#39;re ready to take your skills to the next level!<br/> <br/>
                There is something for everyone on Codédex! Why don&#39;t you try some of their very cool expansions?
            </h5>

            <h5 className={"mt-3 mb-5"}>Click<a href={"https://www.codedex.io/command-line"}> here</a> to find out about
                the
                Command Line (Expansion) course <br/>and <a href={"https://www.codedex.io/git-github"}>here</a> to find
                out about
                the Git & GitHub (Expansion) course!</h5>
           <ShareBox/>
            <br/>
            <GoBackButton/>
        </div>
    );
};

export default AllrounderResult;