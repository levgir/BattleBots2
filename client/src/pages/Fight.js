import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Fight(props) {
    console.log(props.bot1, props.bot2)
    return (
        
        <Container>
            <Row>
                <Col size="md-6">
                    <h1>Fight!!!</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <button>↑</button>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <button>←</button>
                    <button>→</button>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <button>↓</button>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <button>Attack</button>
                </Col>      
            </Row>
            <Row>
                <Col size="md-6">
                    <button>Connect</button>
                </Col>      
            </Row>
        </Container>
        
    )
        
}

export default Fight;