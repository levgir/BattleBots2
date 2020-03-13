import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Jumbotron3 from "../components/Jumbotron3";
import API from "../utils/API";
import { Col, Col2, Row, Row2, Container } from "../components/Grid";
import Select from "react-select";

function NewMatch() {
  // Setting our component's initial state
  const [bots, setBots] = useState([])
  const [bot1, setBot1] = useState({})
  const [bot2, setBot2] = useState({})

  let battleBots = []

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBots()
  }, [])

  // Loads all books and sets them to books
  function loadBots() {
    API.getBots()
      .then(res =>
        setBots(res.data)
      )
      .catch(err => console.log(err));
  };

  function mapBots() {
    battleBots = bots.map(bot => ({
      label: bot.name,
      value: bot._id,
      history: bot.history,
      wins: bot.wins,
      losses: bot.losses,
      owner: bot.owner,
      label2: bot.label
    }))
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          {bots.length ? (
            mapBots(),
            <Select
              placeholder="Select your BattleBot"
              options={battleBots}
              isSearchable
              onChange={setBot1}
            />
          ) : (
              <Select
                placeholder="There are no BattleBots registered!"
              />
            )}
        </Col>
        <Col size="md-6 sm-12">
          {bots.length ? (
            mapBots(),
            <Select
              placeholder="Select your next victim"
              options={battleBots}
              isSearchable
              onChange={setBot2}
            />
          ) : (
              <Select
                placeholder="There are no BattleBots registered!"
              />
            )}
        </Col>
      </Row>
      <Row2>
        <Col size="md-5 sm-12">
          <Jumbotron3>
            {/* <img src={`${process.env.PUBLIC_URL}/assets/images/${bot1.label}.jpg`} /> */}
            <img id="pic1" src={`${process.env.PUBLIC_URL}/photos/${bot1.label2}.jpg`} alt={bot1.label} height="200px" width="200px" style={{ float: "left" }}></img>
            <p><strong>BattleBot: {bot1.label}</strong></p>
            <p><strong>Owner: {bot1.owner}</strong></p>
            <p><strong>{bot1.wins} - {bot1.losses}</strong></p>
            <p>{bot1.history}</p>
          </Jumbotron3>
        </Col>
        <Col2 size="md-1 sm-12">
          <h1>Vs.</h1>
        </Col2>
        <Col size="md-5 sm-12">
          <Jumbotron3>
            <img id="pic1" src={`${process.env.PUBLIC_URL}/photos/${bot2.label2}.jpg`} alt={bot2.label} height="200px" width="200px" style={{ float: "left" }}></img>
            <p><strong>BattleBot: {bot2.label}</strong></p>
            <p><strong>Owner: {bot2.owner}</strong></p>
            <p><strong>{bot2.wins} - {bot2.losses}</strong></p>
            <p>{bot2.history}</p>
          </Jumbotron3>
        </Col>
      </Row2>
      <Row2>
        <Col2 size="md-2 sm-2">
          <a href="/fight">
            <Jumbotron>
              <h1>Fight!!!</h1>
            </Jumbotron>
          </a>
        </Col2>
      </Row2>
    </Container>
  );
}

export default NewMatch;
