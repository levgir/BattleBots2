import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Jumbotron2 from "../components/Jumbotron2";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

function Bots() {

  return (
    <Container fluid>
      <Row>
        <Col size='sm-12'>
          <Jumbotron2>
            <h1>Welcome to the Fight!</h1>
          </Jumbotron2>
        </Col>
      </Row>
      <Row>
        <Col size="md-6 sm-12">
        <a href="/newbot">
          <Jumbotron>           
              <h1>Initialize BattleBots</h1>
          </Jumbotron>
          </a>
        </Col>
        <Col size="md-6 sm-12">
          <a href="/viewBots">
            <Jumbotron>
                <h1>Git Ready to Rumble</h1>
            </Jumbotron>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Bots;
