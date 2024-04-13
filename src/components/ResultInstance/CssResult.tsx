import React from 'react';
import GoBackButton from "@/components/ResultInstance/GoBackButton";
import ShareBox from "@/components/ResultInstance/ShareBox";

/**
 * Renders the result for the css result
 */
const CssResult = () => {
    return (
        <div className={"pt-5 text-center"}>
            <h4 className={"m3-5"}>You are...</h4>
            <h1 className={"text-uppercase"}>CSS!</h1>
            <h5 className={"ms-5 me-5 ps-5 pe-5 mb-3 mt-3"}>Styling is your game. You don&#39;t only create different
                elements, lists, tables, but you can also style them very well! Centering divs are going to be a distant
                issue once you figure everything out! Before you know it, you&#39;ll be animating elements too!
                You&#39;re laid back but you&#39;re also intense when it comes to a project. You like facing new
                challenges that forces you out of your flex-box. This is where you thrive!<br/>
                <br/>
                Did you know that you could master your CSS groundwork on Codédex and build projects as well?</h5>

            <h5 className={"mt-3 mb-5"}>Click<a href={"https://www.codedex.io/css"}> here</a> to find out about The
                Origins
                II: CSS course!</h5>
            <ShareBox/>
            <br/>
            <GoBackButton/>
        </div>
    );
};

export default CssResult;