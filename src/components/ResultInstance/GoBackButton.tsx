import React from 'react';
import Link from 'next/link';
import {Button} from "react-bootstrap";

const GoBackButton = () => {
    return (
        <Link href="/">
            <Button className={"border border-3 border-black"} variant={"warning"} size={"lg"}>Go Back</Button>
        </Link>
    );
};

export default GoBackButton;