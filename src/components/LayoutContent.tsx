'use client';
import React, {PropsWithChildren, useState} from 'react';
import {Container} from "react-bootstrap";
import Footer from "@/components/Footer";

/**
 * LayoutContent is a component that wraps the content of the page in a container.
 * @param children contains the content of the page
 */

const LayoutContent = ({children}: PropsWithChildren) => {

    const [isAccessibleFont, setAccessibleFont] = useState(false);
    const onFontSwitch = () => {
        setAccessibleFont((currentFont) => {
            const newFont = !currentFont;
            if (newFont) {
                document.body.style.fontFamily = "Atkinson Hyperlegible";
            } else {
                document.body.style.fontFamily = "Pixelify Sans Variable";
            } return newFont;
        });
    }

    return (
        <div className={"pt-5 d-flex align-items-center justify-content-center flex-column"}>
            <Container id="text-container" className={"border border-3 border-warning rounded pb-5"}>
                {children}
            </Container>
            <Footer onFontSwitch={onFontSwitch}/>
        </div>
    );
};

export default LayoutContent;