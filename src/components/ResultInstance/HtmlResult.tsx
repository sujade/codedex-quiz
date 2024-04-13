import React from 'react';
import GoBackButton from "@/components/ResultInstance/GoBackButton";
import ShareBox from "@/components/ResultInstance/ShareBox";

/**
 * Renders the result for the html result
 */
const HtmlResult = () => {
    return (
        <div className={"pt-5 text-center"}>
            <h4 className={"m3-5"}>You are...</h4>
            <h1 className={"text-uppercase"}>HTML!</h1>
            <h5 className={"ms-5 me-5 ps-5 pe-5 mb-3 mt-3"}>You don&#39;t just stick to the basics, you own them!
                Whenever you need to create new web application,
                you think carefully, start strong and make it yours! Creating elements, lists, tables and structure is
                totally your playground! You take it easy, but you care about your footwork. Don&#39;t forget, a good
                foundation makes a good developer a better one! Keep learning, and keep growing! <br/> <br/>
                Did you know that you could master your HTML groundwork on Codédex and build projects as well?</h5>

            <h5 className={"mt-3 mb-5"}>Click<a href={"https://www.codedex.io/html"}> here</a> to find out about The
                Origins I: HTML course!</h5>
            <ShareBox/>
            <br/>
            <GoBackButton/>
        </div>
    );
};

export default HtmlResult;