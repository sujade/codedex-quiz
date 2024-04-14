import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GoBackButton from "@/components/ResultInstance/GoBackButton";

const Page = () => {
    return (
        <Container className={"d-flex justify-content-center center-content mt-5"}>
            <Row>
                <Col>
                <ul>
                    <li>Spinning Pixel Coin by <a href={"https://opengameart.org/users/irm5irx"}>irmirx</a></li>
                    <li>Sound Effect from <a
                        href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6104">Pixabay</a>
                    </li>
                    <li>Background art by <a href={"https://ko-fi.com/s/5b6d5672fa"}>Tofu</a></li>
                    <li>Phantasm by <a href={"https://soundcloud.com/purelygrey"}>Purely Grey</a></li>
                    <li>Music promoted by <a href={"https://www.free-stock-music.com"}>free-stock-music</a></li>
                </ul>
                    <div className={"d-flex justify-content-center"}>
                <GoBackButton/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Page;