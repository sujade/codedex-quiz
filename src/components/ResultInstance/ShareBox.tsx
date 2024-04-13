'use client';
import React from 'react';
import {FaLink, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";

/**
 * Handles the sharing of the current URL in different platforms
 */
const ShareBox = () => {
    const handleShare = () => {
        if (navigator.share === undefined) {
            navigator.clipboard.writeText(window.location.href);
            alert("URL copied to clipboard");
        } else {
            navigator.share({
                title: "Codédex Personality Quiz",
                text: "My Codédex Personality Quiz results are out!",
                url: window.location.href
            }).then(() => {
                console.log("URL shared successfully");
            }).catch((error) => {
                console.error("Error sharing URL: ", error);
            });
        }
    };

    return (
        <Container className={"mt-3 mb-3"}>
            <Row className={"mb-3"}><h4>Share your results!</h4></Row>
            <Row className="justify-content-md-center">
                <Col md={1}><FaLink className={"icon"} onClick={handleShare} size={35}></FaLink></Col>
                <Col md={1}><Link
                    href={`https://twitter.com/share?text=My Codédex Personality Quiz results are out!&url=${window.location.href}`}><FaXTwitter
                    className={"icon"} size={35}></FaXTwitter></Link></Col>
                <Col md={1}><Link
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}><FaLinkedin
                    className={"icon"} size={35}></FaLinkedin></Link></Col>
            </Row>
        </Container>
    );
};

export default ShareBox;