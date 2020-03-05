import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  console.log(props)
  const [bot, setBot] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  useEffect(() => {
    API.getBot(props.match.params.id)
      .then(res => setBot(res.data ))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {bot.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>{bot.name} was created by {bot.owner}</h1>
              <p>
                {bot.name}'s record in the arena is {bot.wins}-{bot.losses}.
              </p>
              <p>
                {bot.history}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Owners</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
