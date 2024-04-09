import React from 'react';
import Link from "next/link";
import {Button} from "react-bootstrap";


interface ResultScreenProps {
    pythonScore: number;
    htmlScore: number;
    cssScore: number;
    javascriptScore: number;
}

/**
 * Renders a button that takes the user to the result page
 */
const ResultLinkButton: React.FC<ResultScreenProps> = ({pythonScore, htmlScore, cssScore, javascriptScore}) => {
    if (pythonScore > Math.max(javascriptScore, htmlScore, cssScore)) {
        return <Link href={"/python"}><Button className={"border border-3 border-black"} variant={"warning"}
                                              size={"lg"}>Let&#39;s find out!</Button></Link>
    } else if (javascriptScore > Math.max(htmlScore, cssScore, pythonScore)) {
        return <Link href={"/javascript"}><Button className={"border border-3 border-black"} variant={"warning"}
                                                  size={"lg"}>Let&#39;s find out!</Button></Link>
    } else if (htmlScore > Math.max(cssScore, javascriptScore, pythonScore)) {
        return <Link href={"/html"}><Button className={"border border-3 border-black"} variant={"warning"}
                                            size={"lg"}>Let&#39;s find out!</Button></Link>
    } else if (cssScore > Math.max(javascriptScore, htmlScore, pythonScore)) {
        return <Link href={"/css"}><Button className={"border border-3 border-black"} variant={"warning"}
                                           size={"lg"}>Let&#39;s find out!</Button></Link>
    } else {
        return <Link href={"/allrounder"}><Button variant={"warning"} size={"lg"}>Let&#39;s find out!</Button></Link>
    }
};

export default ResultLinkButton;